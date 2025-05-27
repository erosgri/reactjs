import './App.css'

function App() {


  return (
    <div className='container-app'>
      <div className='container-app__header'>
        <div className='container-app__mask' />
        <h1>Tarefas</h1>

        <input type="text" placeholder="Criar uma nova tarefa" />
      </div>

      <ul className='content-tasks'>
        <li className='task-item'>Tarefa 1</li>
        <li className='task-item'>Tarefa 1</li>
        <li className='task-item'>Tarefa 1</li>
        <li className='task-item'>Tarefa 1</li>
        <li className='task-item'>Tarefa 1</li>
      </ul>

    </div>
  )
}

export default App

// alt + shift + o remove imports desnecessarios!!!
