export function getAppointmentsForDay(state, day) {
  // find the day
  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) {
    return [];
  }

  //find appointment for the given day
  const arr = foundDay.appointments;
  const mappedArr = arr.map((id) => {
    return state.appointments[id];
  });

  return mappedArr;
}

// alternate option: dayListItems = days.map((singleDay) => (
// <DayListItem

//   // find the day
//   const filteredNames = state.days.filter(item => item.name === day);
//   if (!filteredNames.length) {
//     return filteredNames
//   }

//   //find appointment for the given day
//   const arr = filteredNames[0].appointments
//   const appointmentsObjectToArray = Object.values(state.appointments);
//   const appointments = appointmentsObjectToArray.filter(item => arr.includes(item.id))

//version 2 of arr
// const arr = filteredNames.appointments;
// const appointmentsObjectToArray = Object.values(state.appointments);
// const appointments = appointmentsObjectToArray.filter((item) =>
//   arr.includes(item.id)
// );
// return appointments;

export function getInterview(state, interview) {
  //go through appointments object
  //where state.appointments.interview = true/not null
  //grab state.appointments.interview.interviewer value
  //connect with state.interviewers and return value where state.appointments.interview.interviewer === state.interviewers.id

  if (!interview) {
    return null;
  }
  const id = interview.interviewer;
  const updatedInterview = {
    ...interview,
    interviewer: state.interviewers[id],
  };
  return updatedInterview;
}

export function getInterviewersForDay(state, day) {
  // find the interviewer
  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) {
    return [];
  }

  //find appointment for the given day
  const arr = foundDay.interviewers;
  const mappedArr = arr.map((id) => {
    return state.interviewers[id];
  });

  return mappedArr;
}
