import React, {SelectHTMLAttributes} from 'react';
import './styles.css';

interface Selectprops extends SelectHTMLAttributes<HTMLSelectElement> {
    label:string;
    name:string;
    options: Array<{
        value:string;
        label:string
    }>;
}

const Select: React.FC<Selectprops> = ({label, name, options, ...rest}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select defaultValue='' id={name} {...rest}>
                <option value="" disabled  hidden>Selecione uma opção</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select> 
        </div>
    )
}

export default Select;