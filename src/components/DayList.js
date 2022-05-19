import React from "react";
import DayListItem from "./DayListItem";
//this is to generate DayListItem for each day

function DayList(props) {
  const {value, onChange} = props
  const newThing = props.days.map((thing) => {
  return (
    <DayListItem 
    key={thing.id}
    name={thing.name} 
    spots={thing.spots} 
    selected={value === thing.name}
    setDay={onChange} 
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

