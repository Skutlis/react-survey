import React from "react";


export default function TextBox(props){
    const handleChange = props.handleChange
    const label = props.label
    const name = props.name
    const cols = props.cols
    const rows = props.rows
    const value = props.value


    return (
        <label>
            {label}<textarea name={name} cols={cols} rows={rows} value = {value} onChange={(e) => handleChange(e)} />
        </label>
    );
}