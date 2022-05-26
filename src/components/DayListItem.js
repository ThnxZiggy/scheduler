import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

const formatSpots = function(spots) {
  if(spots === 1) {
    return spots + ` spot`  
  }  
  return `${spots === 0 ? 'no' : spots} spots`      
};

export default function DayListItem(props) {
  const {name, spots, selected, setDay} = props;
  const dayClass = classNames('day-list__item', {
    "day-list__item--selected": selected,
    "day-list__item--full": (spots === 0)
  })
  
  const clickHandler = () => setDay(name)

  return (
    <li className={dayClass} onClick={clickHandler} data-testid="day">
      <h2 className="text--regular" >{name}</h2> 
      <h3 selected={selected} className="text--light">{formatSpots(spots)} remaining</h3>
    </li>
  );
}