import { Task } from "./App";

interface CounterTaskProps {
  tasks: Task[];
}

function countTasksComplete(taskList: Task[]) {
  const counter = taskList.filter(function (task) {
    if (task.complete !== false) return task;
  });
  return counter.length;
}

export function CounterTask(props: CounterTaskProps) {
  function countTasksUncompleted() {
    const counter = props.tasks.filter(function (task) {
      if (task.complete !== true) return task;
    });
    console.log(counter);
    return counter.length;
  }

  return (
    <div>
      <div>Всего задач: {props.tasks.length}</div>
      <div>Выполненных задач: {countTasksComplete(props.tasks)}</div>
      <div>Не выполненных задач: {countTasksUncompleted()}</div>
    </div>
  );
}
