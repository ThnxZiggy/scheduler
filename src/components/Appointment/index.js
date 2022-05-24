import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";

import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";
import Confirm from "./Confirm";

const Appointment = function (props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = function (name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition("SAVING");
    props.bookInterview(props.id, interview).then((res) => {
      transition("SHOW");
    });
  };

  const deleteInterview = function () {
    transition("DELETING");
    props.cancelInterview(props.id).then(() => {
      transition("EMPTY");
    });
  };
  // console.log("this is the props: ", props)
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          onConfirm={deleteInterview}
          onCancel={back}
          message={"Are you sure you would like to delete?"}
        />
      )}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back(EMPTY)}
          onSave={save}
        />
      )}
      {mode === DELETING && <Status message={"Deleting"} />}
    </article>
  );
};

export default Appointment;
