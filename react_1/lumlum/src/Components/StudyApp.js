import React, { useState, useEffect } from "react";
import "./StudyApp.css";
import Stats from "./Stats";
import Pomodoro from "./Pomodoro"; // Pomodoro timer stays separate

export default function StudyApp() {
  const [coins, setCoins] = useState(0);
  const [streak, setStreak] = useState(1);
  const [timeStudied, setTimeStudied] = useState(0);
  const [isStudying, setIsStudying] = useState(false);

  useEffect(() => {
    let interval;
    if (isStudying) {
      interval = setInterval(() => {
        setTimeStudied((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStudying]);

  const startStudySession = () => {
    setIsStudying(true);
  };

  const endStudySession = () => {
    setIsStudying(false);
    setCoins(coins + 10); // Reward coins for studying
    setStreak(streak + 1); // Increase streak
  };

  return (
    <div className="study-app">
      <h1>Pomodoro Study!</h1>

      {/* Pass props to Stats */}
      <Stats coins={coins} streak={streak} timeStudied={timeStudied} />

      {isStudying ? (
        <button onClick={endStudySession} className="end-button">
          End Study Session
        </button>
      ) : (
        <button onClick={startStudySession} className="start-button">
          Start Studying
        </button>
      )}

    <Pomodoro /> {/* Pomodoro Timer */}

    </div>
  );
}