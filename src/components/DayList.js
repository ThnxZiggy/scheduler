import React from "react";
import DayListItem from "./DayListItem";
//this is to generate DayListItem for each day

function DayList(props) {
  const {day, setDay} = props
  const newThing = props.days.map((thing) => {
  return (
    <DayListItem 
    key={thing.id}
    name={thing.name} 
    spots={thing.spots} 
    selected={day === thing.name}
    setDay={setDay} 
    />
    )
  })
  return (
    <ul>
      {newThing}
    </ul>
  )
};

export default DayList;

