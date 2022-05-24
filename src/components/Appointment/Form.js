import React from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import { useState } from "react";

const Form = function (props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const cancel = () => {
    reset();
    // setStudent("")
    // setInterviewer(null)
    props.onCancel();
  };

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button
            confirm
            onClick={() => {
              props.onSave(student, interviewer);
            }}
          >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;

// const abc = function (a,b) {
//   let c = a+b
//   return c
// }

// abc(1);
