import { Filter } from "../entities/task/types";

interface ButtonTaskProps {
  filter: Filter;
  setFilter: (newFilter: Filter) => void;
}

export function ButtonTask(props: ButtonTaskProps) {
  const { filter, setFilter } = props;
  return (
    <div>
      <button
        disabled={filter === "all"}
        onClick={() => setFilter("all")}
        className="border-inherit rounded border-2 m-2 p-1 disabled:text-slate-300"
      >
        Все задачи
      </button>
      <button
        disabled={filter === "completed"}
        onClick={() => setFilter("completed")}
        className="border-inherit rounded border-2 m-2 p-1 disabled:text-slate-300"
      >
        Выполненные задачи
      </button>
      <button
        disabled={filter === "uncompleted"}
        onClick={() => setFilter("uncompleted")}
        className="border-inherit rounded border-2 m-2 p-1 disabled:text-slate-300"
      >
        Не выполенные задачи
      </button>
    </div>
  );
}
