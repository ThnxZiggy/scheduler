import { useState } from 'react';


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial])

  function transition(newMode) {
    const newHistory = [...history]
    setMode(newMode)
    newHistory.push(newMode);
    setHistory(newHistory)
    
  }
  function back() {
    const newHistory = [...history]
    if (newHistory.length > 1) {
    newHistory.pop()
    setMode(history[newHistory.length-1])
    setHistory(newHistory)}

  }
  
  
  return { 
    mode,
    transition,
    back
  };

};

//use setHistory in BAck and in Transition
//prev => prev?