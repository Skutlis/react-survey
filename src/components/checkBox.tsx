import React from "react";


export default function CheckBox(props){

    const value = props.value
    const name = props.name
    const onChange = props.onChange
    const checked = props.checked
    const body = props.body
    return (
        <label>
                    
            <input type="checkbox" 
                name={name}
                value = {value}
                onChange={(e) => onChange(e)}
                checked={checked}
                >
            </input>
            {body}
        </label>
    );
}