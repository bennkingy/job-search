import ActionButton from "@/components/ActionButton";
import MainNav from "@/components/MainNav";
import ProfileImage from "@/components/ProfileImage.vue";
import { shallowMount } from "@vue/test-utils";

describe("main navigation", () => {
  const wrapper = shallowMount(MainNav);
  it("displays company name", () => {
    expect(wrapper.text()).toMatch("Company");
  });
  it("displays menu items for navigation", () => {
    const navigationMenuItems = wrapper.findAll("[data-test='menu-item']");
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual(["Teams", "Locations", "Jobs"]);
  });
  it("promts user to log in when logged out", () => {
    const loginButton = wrapper.findComponent({ name: ActionButton.name });
    const profileImage = wrapper.findComponent({ name: ProfileImage.name });
    expect(loginButton.exists()).toBe(true);
    expect(profileImage.exists()).toBe(false);
  });
  it("displays users profile image when users logs in", async () => {
    const loginButton = wrapper.findComponent({ name: ActionButton.name });
    await loginButton.trigger("click");

    const profileImage = wrapper.findComponent({ name: ProfileImage.name });
    expect(loginButton.exists()).toBe(false);
    expect(profileImage.exists()).toBe(true);
  });
  it("displays subnav with additional info", async () => {
    const wrapper = shallowMount(MainNav);
    let subNav = wrapper.find("[data-test='sub-nav']");
    expect(subNav.exists()).toBe(false);

    const loginButton = wrapper.find("[data-test='login-button']");
    await loginButton.trigger("click");

    subNav = wrapper.find("[data-test='sub-nav']");
    expect(subNav.exists()).toBe(true);
  });
});
