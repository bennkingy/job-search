import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
  it("locates element in list and return the next element in list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const result = nextElementInList(list, value);
    expect(result).toBe("D");
  });
  it("when element in list is at the end, it locates element at start of the list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "E";
    const result = nextElementInList(list, value);
    expect(result).toBe("A");
  });
});
