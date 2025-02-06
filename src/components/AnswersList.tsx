import React from "react";
import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {


  const { answersList } = props;
  //answersList.shift();
  if (answersList.length > 0)
  {
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}}
