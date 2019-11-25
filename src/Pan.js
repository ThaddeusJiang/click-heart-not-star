import React, { useState, useEffect } from "react";

const Pan = () => {
  const [running, setRunning] = useState(false);
  const [roundCount, setRoundCount] = useState(0);
  const [score, setScore] = useState(0);
  const [clickable, setClickable] = useState(true);
  const [left, setLeft] = useState(true);
  const [heart, setHeart] = useState(true);
  const [target, setTarget] = useState(null);

  function increaseRound() {
    setRoundCount(count => count + 1);

    setLeft(Math.floor(Math.random() * 100) % 2 === 0);
    setHeart(Math.floor(Math.random() * 100) % 2 === 0);
    setClickable(true);
  }

  function onStart() {
    setRunning(true);
    const target = setInterval(() => {
      increaseRound();
    }, 1000);
    setTarget(target);
  }

  useEffect(() => {
    if (roundCount >= 50) {
      setRunning(false);
      clearInterval(target);
    }
  }, [roundCount, target]);

  return (
    <div>
      <div>
        <h2>Round: {roundCount} / 50</h2>
        <h3>
          {score} / {roundCount}
        </h3>
      </div>
      {!running && <button onClick={onStart}>start</button>}

      {running && clickable && (
        <div className="button-wrapper">
          {heart ? (
            <>
              <button
                onClick={() => {
                  setScore(count => count + 1);
                  setClickable(false);
                }}
                style={{
                  order: left ? 1 : 2
                }}
              >
                ♡
              </button>
              <button onClick={() => setClickable(false)} />
            </>
          ) : (
            <>
              <button
                onClick={() => setClickable(false)}
                style={{
                  order: left ? 1 : 2
                }}
              >
                ☆
              </button>
              <button
                onClick={() => {
                  setScore(count => count + 1);
                  setClickable(false);
                }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Pan;
