import React from "react";


export default function RadioButton(props) {

    const checked = props.checked
    const handleChange = props.handleChange
    const body = props.body
    const value = props.value
    const name = props.name
    
    return (
        <label>
                    
            <input type="radio" 
                name={name}
                value = {value}
                onChange={(e) => handleChange(e)}
                checked={checked}
                >
            </input>
            {body}
        </label>
    );
}