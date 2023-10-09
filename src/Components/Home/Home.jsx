
import React, { useState } from 'react';
import Home1 from './Home1';
import './Home.css';

function Home() {
  const [itemArr, addTask] = useState([]);
  const [iset, addValue] = useState('');
  const [date, startDate] = useState('');

  const handleAddTask = () => {
    const newObj = {
      title: iset,
      date: date,
    };
    const newItemArr = [newObj, ...itemArr];
    addTask(newItemArr);
    addValue('');
    startDate('');
  };

  const handleDeleteAllTasks = () => {
    addTask([]);
  };

  const handleDeleteTask = (index) => {
    const updatedItemArr = [...itemArr];
    updatedItemArr.splice(index, 1);
    addTask(updatedItemArr);
  };

  return (
    <>
      <h1>TodoList</h1>
      <div className='mains'>
        <input
          type='text'
          onChange={(e) => {
            addValue(e.target.value);
          }}
          value={iset} 
          placeholder=' Enter Task Name'
        />
        <br />
        <button onClick={handleAddTask}>Add Task</button>
        <button onClick={handleDeleteAllTasks}>Delete All Tasks</button>
      </div>
      {itemArr.map((item, index) => {
        return (
          <Home1
            key={index}
            title={item.title}
            date={item.date}
            onDelete={() => handleDeleteTask(index)} // Pass the delete function as a prop
          />
        );
      })}
    </>
  );
}

export default Home;
