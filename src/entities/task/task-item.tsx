import { Task } from "./types";
interface TasksItemProps {
  deleteTask: (taskId: string) => void;
  checkboxTask: (taskId: string) => void;
  task: Task;
}

export function TasksItem(props: TasksItemProps) {
  const { deleteTask, checkboxTask, task } = props;
  return (
    <div className="p-4 flex justify-between border-inherit rounded border-2">
      <div>
        <input
          onChange={() => {
            checkboxTask(task.id);
          }}
          type="checkbox"
          checked={task.complete}
        />

        <span className={task.complete ? "line-through m-2" : "m-2"}>
          {task.name}
        </span>
      </div>

      <button className="" onClick={() => deleteTask(task.id)}>
        Удалить
      </button>
    </div>
  );
}
