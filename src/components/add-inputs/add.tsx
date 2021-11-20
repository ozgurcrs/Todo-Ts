import React, { useState } from 'react';
import { IAddProps } from '../../Interfaces/IAddProps'
import { ITask } from '../../Interfaces/ITask';
import Button from '../custom/button';

const Add: React.FC<IAddProps> = ({ setTask }) => {

    const [value, setValue] = useState<string>("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    }

    const addTask = (): void => {
        const addObject: ITask = {
            taskId: Math.floor(Math.random() * 150),
            taskText: value
        }
        setTask((item: any) => [...item, addObject]);
        setValue("");
    }

    const enterSubmit = (e: any): void => {
        if(value && e.key === 'Enter'){
            addTask();
        }
    }

    return (
        <div className="add-task">
            <input type="text" placeholder="Add.." onChange={handleChange} value={value} name="add" onKeyDown={enterSubmit}/>
            <Button onClick={() => addTask()} iconClass="fas fa-plus" />
        </div>
    )
}
export default Add;