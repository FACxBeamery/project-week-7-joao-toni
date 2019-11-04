export const areAllObjPropsFalse = (obj) =>
	Object.values(obj).every((v) => v === false);
