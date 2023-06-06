// import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

function App() {
  return (
    <div className='todo-list-app '>

     {/* <TodoForm/> */}
     <TodoList/>
     {/* <Todo /> */}

    </div>
  );
}

export default App;
