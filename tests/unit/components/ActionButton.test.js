import ActionButton from "@/components/ActionButton";
import { mount } from "@vue/test-utils";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "text",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("text");
  });
  it("applies one of several styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "text",
        type: "secondary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("secondary")).toBe(true);
  });
});
