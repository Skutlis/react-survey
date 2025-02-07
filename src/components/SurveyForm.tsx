

import React, { useState } from 'react';
import RadioButton from './radioInput';
import CheckBox from './checkBox';
import TextBox from './textBox';
import TextInput from './textInput';


interface SurveryFormProps  {
  answer : Record<string, any>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}


export default function SurveyForm(props) {


    const answer = props.answer

    const handleChange = props.handleChange

    const handleSubmit = props.handleSubmit
    const handleCheckboxes = props.handleCheckboxes


    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group-radio">
                <h3>How do you rate you rubber duck color?</h3>
                <div className = "form__radio-group">
                <RadioButton checked = {answer.colour === "1"}
                            handleChange = {handleChange}
                            body = "1"
                            value = {1}
                            name = "colour" />
                <RadioButton checked = {answer.colour === "2"}
                            handleChange = {handleChange}
                            body = "2"
                            value = {2}
                            name = "colour" />
                <RadioButton checked = {answer.colour === "3"}
                            handleChange = {handleChange}
                            body = "3"
                            value = {3}
                            name = "colour" />
                <RadioButton checked = {answer.colour === "4"}
                            handleChange = {handleChange}
                            body = "4"
                            value = {4}
                            name = "colour" />
                </div>
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck?</h3>
                <CheckBox value={0}
                            name="timeSpent"
                            onChange={handleCheckboxes}
                            checked={answer.timeSpent[0]} 
                            body="Swimming" />
                            
                <CheckBox value={1}
                            name="timeSpent"
                            onChange={handleCheckboxes}
                            checked={answer.timeSpent[1]}
                            body="bathing" />
                <CheckBox value={2}
                            name="timeSpent"
                            onChange={handleCheckboxes}
                            checked={answer.timeSpent[2]}
                            body="Chatting" />
                <CheckBox value={3}
                            name="timeSpent"
                            onChange={handleCheckboxes}
                            checked={answer.timeSpent[3]}
                            body="I don't like to spend time with it" />
            </div>
            <TextBox label = "What else have you got to say about your rubber duck?"
                    name="review"
                    cols={30}
                    rows={10}
                    value={answer.review}
                    handleChange={handleChange} />
            <TextInput label = "Put your name here (if you feel like it):"
                        type="text"
                        name = "username"
                        value={answer.username}
                        handleChange={handleChange} />
            <TextInput label="Leave us your email pretty please??"
                        type="email"
                        name="email"
                        value={answer.email}
                        handleChange={handleChange} />
            <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    );
}