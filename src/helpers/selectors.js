export function getAppointmentsForDay(state, day) {

  // find the day
  const filteredNames = state.days.find(item => item.name === day);
  if (!filteredNames) {
    return []
  }

  //find appointment for the given day
  const arr = filteredNames.appointments
  const appointmentsObjectToArray = Object.values(state.appointments);
  const appointments = appointmentsObjectToArray.filter(item => arr.includes(item.id))
  
  return appointments;

}
// dayListItems = days.map((singleDay) => (
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
  
//   return appointments;

// }