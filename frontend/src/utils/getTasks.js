import { tasksData } from "../dummyData/tasksData";

export const getTasks = () => {
	return new Promise((resolve, reject) => {
		if (tasksData) {
			resolve(tasksData);
		} else {
			reject(new Error("no task data available"));
		}
	});
};
