import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const AddTodo = () => {
    setTodos([...todos, todo]);
    setTodo('');
  };

  return (
    <>
      <div className='flex h-screen w-screen bg-purple-300 justify-center items-center rounded-lg'>
        <div className='flex h-[70%] w-[60%] bg-white rounded-lg flex-col'>
          <div className='flex h-[15%] w-[100%]  justify-center items-center'>
            <h1 className=' text-5xl m-2'>TODO</h1>
          </div>
          <div className='flex h-[15%] w-[100%]  items-center justify-center '>
            <input
              type='text'
              value={todo}
              className='flex border-2 h-[50%] w-[70%] rounded-md '
              onChange={inputHandler}
            />
            <button
              className='border-2 py-2 px-6 rounded-md bg-white ml-2'
              onClick={AddTodo}>
              Add
            </button>
          </div>
          <div className='flex h-[70%] w-[100%]  flex-col'>
            {todos.map((t) => {
              return (
                <>
                  <div className='flex h-[10%] w-[100%]  justify-around items-center mt-1'>
                    <div className='flex h-[100%] w-[85%] border-2 bg-white border-black rounded-md'>
                      <h1 className='text-2xl'>{t}</h1>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
