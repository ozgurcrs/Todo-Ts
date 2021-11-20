import React from 'react'
import { ICard } from '../../Interfaces/ICard';
import Card from '../cards/card'

const Cards: React.FC<ICard> = ({ tasks, deleteTask }) => {
    return (
        <section>
            <article>
                <div className="tasks">
                    {tasks.map((item: any) => {
                        return (
                            <Card tasks={item} deleteTask={deleteTask} />
                        )
                    }
                    )}
                </div>
            </article>
        </section>
    )
}


export default Cards