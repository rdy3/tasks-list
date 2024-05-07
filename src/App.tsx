import { Children, ReactNode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface ButtonProps {
  disabled: boolean
  children: ReactNode
}

function Button(props: ButtonProps) {
  console.log(props)
  return (
    <button disabled={props.disabled}>{props.children}</button>
  )
}

// let User = { name: 23, age: 24 }
// User.name
// const { name } = User
// const fruit = ['apple', 'orange']
// const [apple, orange]=fruit

interface Task {
  name: string
}
function App() {
  const [text, setText] = useState('545')
  const [tasks, setTasks] = useState<Task[]>([
    {
      name: '123'
    },
    {
      name: '44'
    }
  ])

  return (
    <>
      <input onChange={(event) => setText(event.target.value)} value={text} />
      <button onClick={() => console.log(text)}>Добавить</button>
      {/* <div className='task'>
        <input type='checkbox' />
        <span>1. Сделать список задач</span>
        <button>Удалить</button>
      </div> */}
      {/* {text === '' ? 'ПУСТО' : ''} */}
      {text === '' && (
        <div>ПУСТО</div>
      )}
      {
        tasks.map(function (task) {
          return (
            < div className='task'>
              <input type='checkbox' />
              <span>{task.name}</span>
              <button>Удалить</button>
            </div>)
        })
      }
      {/* < div className='task'>
        <input type='checkbox' />
        <span>2. Переделывать список задач</span>
        <button>Удалить</button>
      </div> */}
    </>
  )
}

export default App

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

{/* <div>
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
      </p> */}



// const [count, setCount] = useState(0)
// console.log('render')
// return (
//   <div>
//     <div> {count}</div>
//     <button onClick={() => setCount(count - 1)}>кнопка -</button>
//     <button onClick={() => setCount(count + 1)}>кнопка +</button>
//   </div>
// )