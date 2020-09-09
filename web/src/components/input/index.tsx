import React, {InputHTMLAttributes} from 'react';
import './styles.css';

interface inputprops extends InputHTMLAttributes<HTMLInputElement> {
    label:string;
    name:string;
}

const input: React.FC<inputprops> = ({label, name, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/> 
        </div>
    )
}

export default input;