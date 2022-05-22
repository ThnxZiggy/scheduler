import { useState } from 'react';


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  function transition(second) {
    return setMode(second)
  }
  
  
  return { 
    mode,
    transition
    
  };

};
