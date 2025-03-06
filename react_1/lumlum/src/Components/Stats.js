import React from "react";
import "./Stats.css"; // Make sure your styles are applied

export default function Stats({ coins, streak, timeStudied }) {
  return (
    <div className="stats-card">
        <img src="/images/icon.png" alt="Profile Icon" />
        <p>🔥 Streak: {streak} days</p>
        <p>⏳ Time Studied: {timeStudied} seconds</p>
        <p>💰 Coins: {coins}</p>
    </div>

  );
}