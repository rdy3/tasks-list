import { Task } from "../entities/task/types";

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
  const { tasks } = props;
  function countTasksUncompleted() {
    const counter = tasks.filter(function (task) {
      if (task.complete !== true) return task;
    });
    console.log(counter);
    return counter.length;
  }

  return (
    <div>
      <div>Всего задач: {tasks.length}</div>
      <div>Выполненных задач: {countTasksComplete(tasks)}</div>
      <div>Не выполненных задач: {countTasksUncompleted()}</div>
    </div>
  );
}
