import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { setInterviewer, selected, avatar, name, id } = props;
  const interviewerClass = classNames("interviewers__item", { 
    "interviewers__item--selected": selected
  });


  // console.log("props: ", props)
  return (
    <li className={interviewerClass} onClick={setInterviewer} id={id} >
      <img
        className="interviewers__item-image" 
        src={avatar}
        alt={name}
      />
      {selected && name}
      
    </li> 
  );
}
