import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Header } from './components/Header';
import axios from 'axios';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<Todo[] | null>();
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <Header count={count} />
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        {data && (
          <div>
            <p>Todo Title: {data[1].title}</p>
            <p>Completed: {data[1].completed ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
