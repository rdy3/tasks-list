import { ReactNode, useRef, useState } from "react";

import "./App.css";

interface Task {
  name: string;
  complete: boolean;
}

function App() {
  const focusinputref = useRef(null);
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    {
      name: "123",
      complete: false,
    },
    {
      name: "44",
      complete: true,
    },
  ]);
  function addTask() {
    if (text !== "") {
      setTasks([{ name: text, complete: false }, ...tasks]);
      setText("");
    } else {
      focusinput();
    }
  }
  function focusinput() {
    focusinputref.current.focus();
  }
  function deleteTask(taskName: string) {
    const result = tasks.filter(function (element) {
      return element.name !== taskName;
    });
    setTasks(result);
  }

  function checkboxTask(taskName: string) {
    const result = tasks.map(function (task) {
      if (task.name !== taskName) {
        return task;
      } else {
        return { name: task.name, complete: !task.complete };
      }
    });
    setTasks(result);
  }

  return (
    <>
      <input
        onChange={(event) => setText(event.target.value)}
        value={text}
        ref={focusinputref}
      />

      <button onClick={addTask}>Добавить</button>

      {tasks.length === 0 && <div>Нет задач</div>}

      {tasks.map(function (task) {
        return (
          <div className="task">
            <input
              onChange={() => {
                checkboxTask(task.name);
              }}
              type="checkbox"
              checked={task.complete}
            />

            <span>{task.name}</span>

            <button onClick={() => deleteTask(task.name)}>Удалить</button>
          </div>
        );
      })}
    </>
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
