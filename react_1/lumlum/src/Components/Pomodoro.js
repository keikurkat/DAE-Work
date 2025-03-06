import React, { useState, useEffect } from "react";

export default function Pomodoro() {
  const [studyTime, setStudyTime] = useState(25); // Default 25 min
  const [breakTime, setBreakTime] = useState(5); // Default 5 min
  const [timeLeft, setTimeLeft] = useState(studyTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? studyTime * 60 : breakTime * 60);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isBreak, studyTime, breakTime]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(studyTime * 60);
    setIsBreak(false);
  };

  return (
    <div className="pomodoro">
      <h2>{isBreak ? "Break Time" : "Study Time"}</h2>
      <h3>{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</h3>
      <button onClick={startTimer} className="start-button">Start</button>
      <button onClick={pauseTimer} className="end-button">Pause</button>
      <button onClick={resetTimer} className="reset-button">Reset</button>
      <div>
        <label>Study: 
          <input type="number" value={studyTime} onChange={(e) => setStudyTime(e.target.value)} />
        </label>
        <label>Break: 
          <input type="number" value={breakTime} onChange={(e) => setBreakTime(e.target.value)} />
        </label>
      </div>
    </div>
  );
}