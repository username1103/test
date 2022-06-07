import { branch } from "../src/branch";
import { branch2 } from "../src/branch2";
import { branch3 } from "../src/branch3";
import { branch4 } from "../src/branch4";
import { funcs, funcs2 } from "../src/funcs";
import { statement } from "../src/statement";

describe("Test Coverage", () => {
  describe("Statement Coverage Test", () => {
    // stmt branch funcs lines
    // 80   0      100   75
    test("if x >= 3, then return false", async () => {
      // given
      const x = 3;
      // when
      const result = statement(x);
      // then
      expect(result).toEqual(false);
    });

    // stmt branch funcs lines
    // 100   100    100   100
    test("if x < 3, then return true", async () => {
      // given
      const x = 2;

      // when
      const result = statement(x);

      // then
      expect(result).toEqual(true);
    });
  });

  describe("Branch Coverage Test", () => {
    // If it is only test case, then there was an effect of 100% on Branch Coverage
    test("if x > 5 and y < 3, then return true", async () => {
      // given
      const x = 6;
      const y = 2;
      // when
      const result = branch(x, y);
      // then
      expect(result).toEqual(true);
    });

    // If it is only test case, then there was an effect of 66.66% on Branch Coverage
    // test("if x > 5 and y >= 3, then return false", async () => {
    //   // given
    //   const x = 6;
    //   const y = 3;
    //   // when
    //   const result = branch(x, y);
    //   // then
    //   expect(result).toEqual(false);
    // });

    // If it is only test case, then there was an effect of 33.3% on Branch Coverage
    // test("if x <= 5 and y < 3, then return false", async () => {
    //   // given
    //   const x = 5;
    //   const y = 2;
    //   // when
    //   const result = branch(x, y);
    //   // then
    //   expect(result).toEqual(false);
    // });

    // If it is only test case, then there was an effect of 33.3% on Branch Coverage
    // test("if x <= 5 and y >= 3, then return false", async () => {
    //   // given
    //   const x = 5;
    //   const y = 3;
    //   // when
    //   const result = branch(x, y);
    //   // then
    //   expect(result).toEqual(false);
    // });
  });

  describe("Branch Coverage Test 2", () => {
    // If it is only test case, then there was an effect of 100% on branch coverage
    test("if x > 5 and  y < 3, then return true", async () => {
      // given
      const x = 6;
      const y = 2;
      // when
      const result = branch2(x, y);
      // then
      expect(result).toEqual(true);
    });

    // If it is only test case, then there was an effect of 50% on branch coverage
    // test("if x > 5 and  y >= 3, then return false", async () => {
    //   // given
    //   const x = 6;
    //   const y = 3;
    //   // when
    //   const result = branch2(x, y);
    //   // then
    //   expect(result).toEqual(false);
    // });
  });

  describe("Branch Coverage Test3", () => {
    test("if x > 5, y >= 3 and z < 3, then return true", async () => {
      // given
      const x = 6,
        y = 3,
        z = 2;

      // when
      const result = branch3(x, y, z);

      // then
      expect(result).toEqual(true);
    });

    test("if x > 5, y < 3 and z < 3, then return true", async () => {
      // given
      const x = 6,
        y = 2,
        z = 2;

      // when
      const result = branch3(x, y, z);

      // then
      expect(result).toEqual(true);
    });
  });

  describe("Branch Coverage Test4", () => {
    // If it is only test case, then there was an effect of 66.6% on branch coverage
    // test("x > 5", async () => {
    //   // given
    //   const x = 6;

    //   // when
    //   branch4(x);

    //   // then
    // });

    // If it is only test case, then there was an effect of 0% on branch coverage
    test("x < 5", async () => {
      // given
      const x = 3;

      // when
      branch4(x);

      // then
    });
  });

  describe("Funcs Coverage Test", () => {
    // stmt branch funcs lines
    // 83.33  100   50     75
    test("funcs() return true", async () => {
      // given

      // when
      const result = funcs();
      // then

      expect(result).toEqual(true);
    });

    // stmt branch funcs lines
    // 100   100    100   100
    test("funcs2() return true", async () => {
      // given

      // when
      const result = funcs2();

      // then
      expect(result).toEqual(true);
    });
  });
});
