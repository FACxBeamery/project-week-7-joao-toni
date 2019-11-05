import { tasksData } from "../dummyData/tasksData";

export const markTaskAsComplete = (day, id, action) => {
	const dayOfTheWeek = tasksData[day];
	dayOfTheWeek.map((task) => {
		if (task.id === id) {
			if (action === "tocomplete") {
				task.progress = "complete";
			} else if (action === "toreopen") {
				task.progress = "inprogress";
			}
			return task;
		}
	});
};
