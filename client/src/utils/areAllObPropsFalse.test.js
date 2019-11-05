import "@testing-library/jest-dom/extend-expect";
import { areAllObjPropsFalse } from "./areAllObjPropsFalse";

describe("testing areAllObjPropsFalse", () => {
    test("testing when all props are false", () => {
        expect(
            areAllObjPropsFalse({
                prop1: false,
                prop2: false,
                prop3: false,
                prop4: false
            })
        ).toBe(true);
    });
    test("testing when all props are true", () => {
        expect(
            areAllObjPropsFalse({
                prop1: true,
                prop2: true,
                prop3: true,
                prop4: true
            })
        ).toBe(false);
    });
    test("testing when all props are false except one", () => {
        expect(
            areAllObjPropsFalse({
                prop1: false,
                prop2: false,
                prop3: false,
                prop4: true
            })
        ).toBe(false);
    });
    test("testing when all props are true except one", () => {
        expect(
            areAllObjPropsFalse({
                prop1: false,
                prop2: true,
                prop3: true,
                prop4: true
            })
        ).toBe(false);
    });
    test("testing props that aren't of type Boolean", () => {
        expect(
            areAllObjPropsFalse({
                prop1: false,
                prop2: false,
                prop3: false,
                prop4: "false"
            })
        ).toBe(false);
    });
    test("testing props that aren't of type Boolean", () => {
        expect(
            areAllObjPropsFalse({
                prop1: false,
                prop2: false,
                prop3: false,
                prop4: undefined
            })
        ).toBe(false);
    });
    test("testing props that aren't of type Boolean", () => {
        expect(
            areAllObjPropsFalse({
                prop1: false,
                prop2: false,
                prop3: false,
                prop4: null
            })
        ).toBe(false);
    });
});
