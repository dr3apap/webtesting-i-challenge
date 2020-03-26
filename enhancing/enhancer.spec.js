const enhancer = require("./enhancer.js");

// test away!
it("should run the tests", function() {
  expect(true).toBe(true);
});

describe("enhancer.js", () => {
  describe(".repair()", () => {
    it("should return a new item object with durability restored to 100 ", () => {
      const item = {
        // name: "bulletProof",
        // enhancement: 20,
        durability: 100,
      };
      //Act
      const restored = enhancer.repair(item);
      //Assert
      expect(restored).toStrictEqual({ durability: 100 });
    });
    //Act

    it("should return an object with property of durability and value of 100 ", () => {
      //Assert

      // expect(enhancer.repair({ durability: 80 }).durability).toBe(100);

      expect(enhancer.repair({ durability: 100 }).durability).toBe(100);
      expect(enhancer.repair({ durability: 80 }).durability).toBe(100);
      expect(enhancer.repair({ durability: 65 }).durability).toBe(100);
      expect(enhancer.repair({ durability: 50 }).durability).toBe(100);
    });
  });

  describe(".succeed()", () => {
    //Act

    it("should increase enhancement by 1", () => {
      //Assert

      // expect(enhancer.succeed({ enhancer: 16 + 3 }).enhancer).toBe(17);

      expect(enhancer.succeed({ enhancement: 16 + 1 }).enhancement).toBe(17);
      expect(enhancer.succeed({ enhancement: 19 + 1 }).enhancement).toBe(20);
    });
    //Act
    it("enhancement should not change if equal 20 ", () => {
      //Assert

      // expect(enhancer.succeed({ enhancer: 20 }).enhancer).toBe(25);

      expect(enhancer.succeed({ enhancement: 20 }).enhancement).toBe(20);
    });
    //Act
    it("The durability of item should not changed or increase ", () => {
      //Assert

      // expect(
      //   enhancer.succeed({ enhancer: 20, durability: 105 }).durability,
      // ).toBe(100);
      expect(
        enhancer.succeed({ enhancement: 15, durability: 110 }).durability,
      ).toBe(100);
    });
  });

  describe(".fail()", () => {
    it("should decreased durability by 5 if enhancement is less than 15", () => {
      // expect(
      //   enhancer.fail({ enhancement: 10, durability: 100 }).durability,
      // ).toBe(100);
      expect(
        enhancer.fail({ enhancement: 10, durability: 95 }).durability,
      ).toBe(90);
      expect(
        enhancer.fail({ enhancement: 10, durability: 90 }).durability,
      ).toBe(85);
    });

    it("should decrease the durability by 10, if enhancement is greater or equal 15", () => {
      // expect(enhancer.fail({enhancement: 16, durability: 50}).durability).toBe(45);

      expect(
        enhancer.fail({ enhancement: 15, durability: 70 }).durability,
      ).toBe(60);
      expect(
        enhancer.fail({ enhancement: 17, durability: 77 }).durability,
      ).toBe(70);
      expect(
        enhancer.fail({ enhancement: 16, durability: 106 }).durability,
      ).toBe(100);
    });

    it("should decrease the enhancement by one if it is over 16", () => {
      // expect(enhancer.fail({enhancement: 19}).enhancement).toBe(18);
      expect(enhancer.fail({ enhancement: 17 }).enhancement).toBe(16);
      expect(enhancer.fail({ enhancement: 18 }).enhancement).toBe(17);
    });
  });
});
