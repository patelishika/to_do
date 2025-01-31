import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const AddTodo = () => {
    setTodos([...todos, { id: Date.now(), text: todo }]);
    setTodo('');
  };

  const deleteTodo = (t) => {
    setTodos(
      todos.filter((temp) => {
        if (temp.id != t.id) {
          return temp;
        }
      })
    );
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
              className='border-2 py-2 px-6 rounded-md border-gray-300 ml-2'
              onClick={AddTodo}>
              Add
            </button>
          </div>
          <div className='flex h-[70%] w-[100%]  flex-col justify-start items-center'>
            {todos.map((t) => {
              return (
                <div
                  key={t.id}
                  className=' p-5 mt-3 flex h-[10%] w-[85%] border-2 border-gray-300 rounded-md justify-between items-center'>
                  <h1 className='text-2xl'>{t.text}</h1>
                  <div className='flex h-[85%] w-[10%] justify-end items-center '>
                    <button
                      className='flex border-2 border-gray-300 h-5 w-5 p-4 text-center rounded-full justify-center items-center'
                      onClick={() => {
                        deleteTodo(t);
                      }}>
                      x
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
