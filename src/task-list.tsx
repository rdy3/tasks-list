import { Task } from "./App";
interface TasksProps {
  tasks: Task[];
  deleteTask: (taskId: string) => void;
  checkboxTask: (taskId: string) => void;
  task: Task;
}

export function TasksList(props: TasksProps) {
  return (
    <div className="p-4 flex justify-between border-inherit rounded border-2">
      <div>
        <input
          onChange={() => {
            props.checkboxTask(props.task.id);
          }}
          type="checkbox"
          checked={props.task.complete}
        />

        <span className={props.task.complete ? "line-through m-2" : "m-2"}>
          {props.task.name}
        </span>
      </div>

      <button className="" onClick={() => props.deleteTask(props.task.id)}>
        Удалить
      </button>
    </div>
  );
}
