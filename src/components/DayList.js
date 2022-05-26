import React from "react";
import DayListItem from "./DayListItem";
//this is to generate DayListItem for each day

function DayList(props) {
  const dayListItems = props.days.map((singleDay) => (
    <DayListItem
      key={singleDay.id}
      name={singleDay.name}
      spots={singleDay.spots}
      selected={props.value === singleDay.name}
      setDay={props.onChange}
    />
  ));

  return <ul>{dayListItems}</ul>;
}

export default DayList;
