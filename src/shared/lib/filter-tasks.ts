import { Filter, Task} from "../../entities/task/types";

export function filterTasks(
  tasks: Task[],
  currentFilter: Filter
) {
  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "all") return true;
    if (currentFilter === "completed") return task.complete;
    if (currentFilter === "uncompleted") return !task.complete;
  });
  return filteredTasks;
}
