import React, { FC, useState } from 'react';
/* import { Routes, Route } from "react-router-dom"; */
import Navigation from './components/navbar/navigation'
import Add from './components/add-inputs/add'
import "./styles/App.scss"
import { ITask } from './Interfaces/ITask'
import Cards from './components/cards/cards'

const App: FC = () => {

  const [tasks, setTask] = useState<ITask[]>([]);

  const deleteTask = (taskId: number) => {

    const filterObject: ITask[] = tasks.filter(item => item.taskId !== taskId);
    setTask(filterObject);
  }
  return (
    <div className="container">
      <div className="phone-view">
        <Navigation />
        <Cards tasks={tasks} deleteTask={deleteTask} />
        <Add setTask={setTask} tasks={tasks} />
      </div>
    </div >


  )
}

export default App;
