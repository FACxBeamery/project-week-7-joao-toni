import { tasksData } from "../dummyData/tasksData";

export const addNewTaskEvent = (day, newTask) => tasksData[day].push(newTask);
