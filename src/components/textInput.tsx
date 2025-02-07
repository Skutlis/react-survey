import React from "react";


export default function TextInput(props){
    const label = props.label
    const type = props.type
    const name = props.name
    const value = props.value
    const handleChange = props.handleChange
    return (
        <label>
            {label}
            <input
                type="text"
                name={name}
                value={value}
                onChange={e => handleChange(e)} />
        </label>
    );
}