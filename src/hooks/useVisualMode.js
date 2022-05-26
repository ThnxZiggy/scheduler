import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace) {
      setHistory((prev) => {
        const newHistory = [...prev];

        newHistory.splice(newHistory.length - 1, 1, newMode);
        return newHistory;
      });
      return;
    };

    setHistory((prev) => {
      const newHistory = [...prev];
      newHistory.push(newMode);
      return newHistory;
    });
  };

  function back() {
    const newHistory = [...history];
    if (newHistory.length > 1) {
      newHistory.pop();
      setMode(history[newHistory.length - 1]);
      setHistory(newHistory);
    };
  };

  return {
    mode,
    transition,
    back,
  };
};
