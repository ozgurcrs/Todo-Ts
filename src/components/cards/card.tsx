import React from 'react'
import { ICard } from '../../Interfaces/ICard';
import Button from '../../components/custom/button'

const Card: React.FC<ICard> = ({ tasks, deleteTask }) => {
    return (
        <div className="task" >
            <p>{tasks.taskText}</p>
            <Button onClick={() => deleteTask(tasks.taskId)} iconClass="far fa-trash-alt" />
        </div>
    )
}


export default Card