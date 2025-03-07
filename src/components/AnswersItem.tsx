// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

import React from "react";

const answersSet =["Swimming", "Bathing", "Chatting","I don't like to spend time with it"
];


function ItemsList(props) {
  const list = props.list
  const key = props.key
  
  return (
    <ul key = {key}>
      {list.map((item, i) => (
        item ? 
        <li key={i}>{answersSet[i]}</li>
        :
        <></>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem(
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  //answerItem: { username, colour, timeSpent, review, mail }
  props
) {
  const { username, colour, timeSpent, review, mail } = props.answerItem
  const id = props.id
  const editAnswer = props.editAnswer
  
  return (
    <li>
      <article className="answer">
        <button type = "button" onClick={() => editAnswer(id)}> Edit </button>
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <span>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent}
                    key ={username} />
        </span>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}
