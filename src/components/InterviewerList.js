import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import classNames from "classnames";
import PropTypes from "prop-types";


InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};

export default function InterviewerList(props) {

  const interviewerSCSS = classNames(
    "interviewers",
    "interviewers__header",
    "interviewers__list"
  );
  // console.log("interviewer list :", props.interviewers)
  const interviewer = props.interviewers.map((person) => {
    // const ifSelected = props.interviewer === person.id
    return (
      <InterviewerListItem
        key={person.id}
        name={person.name}
        avatar={person.avatar}
        selected={props.value === person.id}
        setInterviewer={() => props.onChange(person.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className={interviewerSCSS}>{interviewer}</ul>
    </section>
  );
}
