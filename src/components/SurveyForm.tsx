

import React, { useState } from 'react';


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
                <label>
                    
                    <input type="radio" 
                        name="colour"
                        value = {1}
                        onChange={(e) => handleChange(e)}
                        checked={answer.colour === "1"}
                        >
                    </input>
                    1
                </label>
                <label>
                    
                    <input type="radio" 
                        name="colour"
                        value = {2}
                        onChange={(e) => handleChange(e)}
                        checked={answer.colour === "2"}>
                    </input>
                    2
                </label>
                <label>
                    
                    <input type="radio" 
                        name="colour"
                        value = {3}
                        onChange={(e) => handleChange(e)}
                        checked={answer.colour === "3"}>
                    </input>
                    3
                </label>
                <label>
                    
                    <input type="radio" 
                        name="colour"
                        value = {4}
                        onChange={(e) => handleChange(e)}
                        checked={answer.colour === "4"}>
                    </input>
                    4
                </label>
                </div>
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck?</h3>
                <label>
                    
                    <input type="checkbox" 
                        name="timeSpent"
                        value = {0}
                        onChange={(e) => handleCheckboxes(e)}
                        checked={answer.timeSpent[0]}
                        >
                        
                        
                    </input>
                    Swimming
                </label>
                <label>
                    
                    <input type="checkbox" 
                        name="timeSpent"
                        value = {1}
                        onChange={(e) => handleCheckboxes(e)}
                        checked={answer.timeSpent[1]}>
                    </input>
                    Bathing
                </label>
                <label>
                    
                    <input type="checkbox" 
                        name="timeSpent"
                        value = {2}
                        onChange={(e) => handleCheckboxes(e)}
                        checked={answer.timeSpent[2]}>
                    </input>
                    Chatting
                </label>
                <label>
                    
                    <input type="checkbox" 
                        name="timeSpent"
                        value = {3}
                        onChange={(e) => handleCheckboxes(e)}
                        checked={answer.timeSpent[3]}>
                    </input>
                    I don't like to spend time with it
                </label>
            </div>
            <label>
                What else have you got to say about your rubber duck?<textarea name="review" cols={30} rows={10} value = {answer.review} onChange={(e) => handleChange(e)} />
            </label>
            <label
                >Put your name here (if you feel like it):<input
                type="text"
                name="username"
                value={answer.username}
                onChange={e => handleChange(e)} />
                </label>
            <label
                >Leave us your email pretty please??<input
                type="email"
                name="email"
                value={answer.email}
                onChange={e => handleChange(e)} /></label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    );
}