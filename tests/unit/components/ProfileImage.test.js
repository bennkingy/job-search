import ProfileImage from "@/components/ProfileImage.vue";
import { mount } from "@vue/test-utils";

describe("ProfileImage", () => {
  it("renders", () => {
    const wrapper = mount(ProfileImage);
    const image = wrapper.find("[data-test='profile-image']");
    expect(image.attributes("src")).toBe(wrapper.vm.imageLink);
  });
});
