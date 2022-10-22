import MainNav from "@/components/MainNav.vue";
import { mount } from "@vue/test-utils";

describe("MainNav.vue", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Company");
  });
  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll("[data-test='menu-item']");
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual(["Teams", "Locations", "Jobs"]);
  });
});
