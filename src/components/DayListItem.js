import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const {name, spots, selected, setDay} = props;
  const dayClass = classNames('day-list__item', {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  })

  return (
    <li className={dayClass} onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2> 
      <h3 selected={selected} className="text--light">{spots} Spots remaining</h3>
    </li>
  );
}