import { tasksData } from "../dummyData/tasksData";
import { getDayName } from "../utils/dateHelpers";

export const getMostRecent = () => {
	return new Promise((resolve, reject) => {
		const now = new Date();
		const currentDayOfTheWeek = getDayName(now.getDay());
		const currentTime = `${now.getHours()}:${now.getMinutes()}`;
		const currentTimeInSeconds = currentTime
			.split(":")
			.reduce((acc, time) => 60 * acc + time);
		const tasksAvailable = tasksData[currentDayOfTheWeek];
		if (tasksAvailable.length > 0) {
			resolve(
				tasksAvailable.find(
					(task) =>
						task.time
							.split(":")
							.reduce((acc, time) => 60 * acc + time) >
						currentTimeInSeconds
				)
			);
		} else {
			reject(new Error("No tasks available"));
		}
	});
};
