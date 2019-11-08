import TableTop from "./table";

describe("TableTop", () => {
  describe("New table without any params", () => {
    const tableTop = new TableTop();

    it("should create a 5x5 matrix", () => {
      expect(tableTop.width).toBe(5);
      expect(tableTop.height).toBe(5);
      expect(tableTop.content.length).toEqual(5);
      expect(tableTop.content[0].length).toEqual(5);
    });
  });

  describe("new with one param - new TableTop(9)", () => {
    it("should create an 9x9 size matrix", () => {
      const tableTop = new TableTop(9);

      expect(tableTop.width).toEqual(9);
      expect(tableTop.height).toEqual(9);
      expect(tableTop.content.length).toEqual(9);
      expect(tableTop.content[0].length).toEqual(9);
    });
  });

  describe("new with two params - new TableTop(3x8)", () => {
    it("should create an 3x8 size matrix", () => {
      const tableTop = new TableTop(3, 8);

      expect(tableTop.width).toEqual(3);
      expect(tableTop.height).toEqual(8);
      expect(tableTop.content.length).toEqual(8);
      expect(tableTop.content[0].length).toEqual(3);
    });
  });

  describe("isBorder(x, y)", () => {
    it("should be false when not a border's coordinates", () => {
      const tableTop = new TableTop();
      const pos = { x: 3, y: 3 };

      expect(tableTop.isBorder(pos)).toBe(false);
    });

    it("should be true when a border's coordinates", () => {
      const tableTop = new TableTop();

      expect(tableTop.isBorder({ x: 0, y: 0 })).toBe(true);
      expect(tableTop.isBorder({ x: 0, y: 3 })).toBe(true);
      expect(tableTop.isBorder({ x: 3, y: 0 })).toBe(true);
      expect(tableTop.isBorder({ x: 4, y: 2 })).toBe(true);
      expect(tableTop.isBorder({ x: 2, y: 4 })).toBe(true);
    });

    it("should be false when not border coordinates", () => {
      const tableTop = new TableTop();

      expect(tableTop.isBorder({ x: 1, y: 1 })).toBe(false);
      expect(tableTop.isBorder({ x: 3, y: 3 })).toBe(false);
    });
  });
});
