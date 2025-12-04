import * as React from 'react';
import classes from './MySelect.module.css'

interface ISelectProps {
    defaultValue: string,
    options: {name: string, value: string}[],
    value: string,
    onChange: (sort: any) => void
}

function MySelect({ defaultValue, options, value, onChange }: ISelectProps) {
    return (
        <select className={classes.mySlct} name="filterBy" value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="" disabled>{defaultValue}</option>
            {
                options.map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )
            }
        </select>);
}

export default MySelect;