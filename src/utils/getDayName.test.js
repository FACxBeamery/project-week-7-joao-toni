import "@testing-library/jest-dom/extend-expect";
import {getDayName}  from "./getDayName"

describe("testing getDayName", () => {
    test("testing if Monday, Tuesday, Wednesday, etc gets returned if id is 1,2,3...", () => {
        expect(getDayName(1)).toBe("Monday");
        expect(getDayName(2)).toBe("Tuesday");
        expect(getDayName(3)).toBe("Wednesday");
        expect(getDayName(4)).toBe("Thursday");
        expect(getDayName(5)).toBe("Friday");
    })
    test("testing if Monday gets returned if id is empty string", () => {
        expect(getDayName('')).toBe(undefined);
    })
    test("testing if Monday gets returned if id is a number string", () => {
        expect(getDayName('1')).toBe("Monday");
    })
})