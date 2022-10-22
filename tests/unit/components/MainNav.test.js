import ActionButton from "@/components/ActionButton";
import MainNav from "@/components/MainNav.vue";
import ProfileImage from "@/components/ProfileImage.vue";

import { mount } from "@vue/test-utils";

describe("main navigation", () => {
  const wrapper = mount(MainNav);
  it("displays company name", () => {
    expect(wrapper.text()).toMatch("Company");
  });
  it("displays menu items for navigation", () => {
    const navigationMenuItems = wrapper.findAll("[data-test='menu-item']");
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual(["Teams", "Locations", "Jobs"]);
  });
  it("promts user to log in when logged out", () => {
    const wrapper = mount(MainNav, {
      data() {
        return {
          isLoggedIn: false,
        };
      },
    });
    const loginButton = wrapper.findComponent({ name: ActionButton.name });
    const profileImage = wrapper.findComponent({ name: ProfileImage.name });
    expect(loginButton.exists()).toBe(true);
    expect(profileImage.exists()).toBe(false);
  });
  it("displays users profile image when logged in", () => {
    const wrapper = mount(MainNav, {
      data() {
        return {
          isLoggedIn: true,
        };
      },
    });
    const loginButton = wrapper.findComponent({ name: ActionButton.name });
    const profileImage = wrapper.findComponent({ name: ProfileImage.name });
    expect(loginButton.exists()).toBe(false);
    expect(profileImage.exists()).toBe(true);
  });
});
