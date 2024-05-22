interface ButtonTaskProps {
  filter: "all" | "completed" | "uncompleted";
  setFilter: Function;
}

export function ButtonTask(props: ButtonTaskProps) {
  return (
    <div>
      <button
        disabled={props.filter === "all"}
        onClick={() => props.setFilter("all")}
        className="border-inherit rounded border-2 m-2 p-1 disabled:text-slate-300"
      >
        Все задачи
      </button>
      <button
        disabled={props.filter === "completed"}
        onClick={() => props.setFilter("completed")}
        className="border-inherit rounded border-2 m-2 p-1 disabled:text-slate-300"
      >
        Выполненные задачи
      </button>
      <button
        disabled={props.filter === "uncompleted"}
        onClick={() => props.setFilter("uncompleted")}
        className="border-inherit rounded border-2 m-2 p-1 disabled:text-slate-300"
      >
        Не выполенные задачи
      </button>
    </div>
  );
}
