import { useState } from "react";
import AnswersList from "./AnswersList";
import AnswersItem from "./AnswersItem";
import SurveyForm from "./SurveyForm";
import React from "react";



function Survey(props) {

  
  const [open, setOpen] = useState(false); //Ignore this state

  const [answersList, setAnswersList] = useState([])
  const [answer, setAnswer] = useState({
     username: "", 
     colour: "",
     timeSpent: [false, false, false, false], 
     review: "",
     email: ""
  })

  const handleChange = (event) => {
    
    setAnswer({...answer, [event.target.name] : event.target.value})
  }

  const handleCheckboxes = (event) => {
  
    const currentTimeSpent = answer.timeSpent
    
    currentTimeSpent[parseInt(event.target.value)] = !currentTimeSpent[parseInt(event.target.value)]
    
    setAnswer({...answer, ["timeSpent"] : currentTimeSpent})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const answers = answersList
    answers.push(answer)
    setAnswersList(answers)
    setAnswer({
      username: "", 
      colour: "",
      timeSpent: [false, false, false, false], 
      review: "",
      email: ""
   })
  }
  console.log(answer)

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */
          <AnswersList answersList={answersList} />
        }
      </section>
      <section className="survey__form">{/* a form should be here */
        <SurveyForm answer = {answer}
                    handleChange = {handleChange}
                    handleSubmit = {handleSubmit}
                    handleCheckboxes = {handleCheckboxes} />
        }</section>
    </main>
  );
}

export default Survey;
