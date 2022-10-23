import ProfileImage from "@/components/Navigation/ProfileImage";
import { shallowMount } from "@vue/test-utils";

describe("ProfileImage", () => {
  it("renders", () => {
    const wrapper = shallowMount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
