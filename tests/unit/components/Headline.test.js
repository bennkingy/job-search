import Headline from "@/components/Headline";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";

describe("Headline", () => {
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });
  afterEach(() => {
    jest.useRealTimers("legacy");
  });
  it("It displays introductory action verb", () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });
  it("It changes action verb at a consistent interval", () => {
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
  });
  it("It swaps action verb after first interval", async () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    jest.runOnlyPendingTimers();
    await nextTick();
    expect(actionPhrase.text()).toBe("Create for everyone");
  });
  it("It removes interval when component is removed", async () => {
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled;
  });
});
