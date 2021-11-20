
import React from 'react';
import IButton from '../../Interfaces/IButton';


const Button: React.FC<IButton> = ({ onClick, iconClass, textValue }) => {
    return (
        <button onClick={() => onClick()}><i className={iconClass}></i>{textValue}</button>
    )
}



export default Button;