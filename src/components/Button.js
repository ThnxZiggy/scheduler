import React from "react";

import "components/Button.scss";

export default function Button(props) {
   const {confirm, danger, onClick, disabled} = props
   let buttonClass = "button";
   if (confirm) {
     buttonClass += " button--confirm";
   }

   if (danger) {
      buttonClass += " button--danger";
    }
   
   if (onClick) {
      
   }
  
 
   return <button onclick={onClick} disabled={disabled} className={buttonClass}>{props.children}</button>;
 }
