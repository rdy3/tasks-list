import { useEffect, useRef, useState } from "react";

import "./App.css";

interface Task {
  name: string;
  complete: boolean;
  id: number;
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<Task[]>(function () {
    const getTasks = localStorage.getItem("tasks");
    if (getTasks !== null) {
      return JSON.parse(getTasks) as Task[];
    } else {
      return [];
    }
  });

  useEffect(
    function () {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    [tasks]
  );

  function addTask() {
    if (text !== "") {
      setTasks([{ name: text, complete: false, id: Math.random() }, ...tasks]);
      setText("");
    } else {
      // if (inputRef.current !== null) {
      //   inputRef.current.focus();
      // }
      inputRef.current?.focus();
    }
  }

  function deleteTask(taskId: number) {
    const result = tasks.filter(function (element) {
      return element.id !== taskId;
    });
    setTasks(result);
  }

  function checkboxTask(taskId: number) {
    const result = tasks.map(function (task) {
      if (task.id !== taskId) {
        return task;
      } else {
        return { name: task.name, complete: !task.complete, id: task.id };
      }
    });
    setTasks(result);
  }

  function countTasksComplete() {
    const counter = tasks.filter(function (task) {
      if (task.complete !== false) return task;
    });
    return counter.length;
  }

  function countTasksUncompleted() {
    const counter = tasks.filter(function (task) {
      if (task.complete !== true) return task;
    });
    console.log(counter);
    return counter.length;
  }

  return (
    <div className="justify-start m-4 space-y-4">
      <input
        className="border-inherit rounded border-2 p-1"
        onChange={(event) => setText(event.target.value)}
        value={text}
        ref={inputRef}
      />

      <button
        className="border-inherit rounded border-2 m-2 p-1"
        onClick={addTask}
      >
        Добавить
      </button>

      {tasks.length === 0 && <div>Нет задач</div>}

      {tasks.map(function (task) {
        return (
          <div className="p-4 flex justify-between border-inherit rounded border-2">
            <div className="">
              <input
                onChange={() => {
                  checkboxTask(task.id);
                }}
                type="checkbox"
                checked={task.complete}
              />

              <span className="m-2">{task.name}</span>
            </div>

            <button className="" onClick={() => deleteTask(task.id)}>
              Удалить
            </button>
          </div>
        );
      })}
      <div>Всего задач: {tasks.length}</div>
      <div>Выполненных задач: {countTasksComplete()}</div>
      <div>Не выполненных задач: {countTasksUncompleted()}</div>
    </div>
  );
}

export default App;

// function Task() {
//   return (
//     <>
//       <input></input>
//       <div className='task'>1. Сделать список задач</div>
//       <div className='task'>2. Переделывать список задач, пока не будет готово</div>
//     </>
//   )
// }
// export Task

{
  /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + Reeeeeeect</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button disabled={false}><span>zxcxc</span></Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}

// const [count, setCount] = useState(0)
// console.log('render')
// return (
//   <div>
//     <div> {count}</div>
//     <button onClick={() => setCount(count - 1)}>кнопка -</button>
//     <button onClick={() => setCount(count + 1)}>кнопка +</button>
//   </div>
// )

{
  /* <div className='task'>
        <input type='checkbox' />
        <span>1. Сделать список задач</span>
        <button>Удалить</button>
      </div> */
}
{
  /* {text === '' ? 'ПУСТО' : ''} */
}

{
  /* < div className='task'>
        <input type='checkbox' />
        <span>2. Переделывать список задач</span>
        <button>Удалить</button>
      </div> */
}

// interface ButtonProps {
//   disabled: boolean;
//   children: ReactNode;
// }

// function Button(props: ButtonProps) {
//   console.log(props);
//   return <button disabled={props.disabled}>{props.children}</button>;
// }

// let User = { name: 23, age: 24 }
// User.name
// const { name } = User
// const fruit = ['apple', 'orange']
// const [apple, orange]=fruit
