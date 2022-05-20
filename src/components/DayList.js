import React from "react";
import DayListItem from "./DayListItem";
//this is to generate DayListItem for each day

function DayList(props) {
  const { days, value, onChange } = props;

  const dayListItems = days.map((singleDay) => (
    <DayListItem
      key={singleDay.id}
      name={singleDay.name}
      spots={singleDay.spots}
      selected={value === singleDay.name}
      setDay={onChange}
    />
  ));

  return <ul>{dayListItems}</ul>;
}

export default DayList;
