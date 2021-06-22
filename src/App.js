import { useState, useEffect, useCallback, useMemo } from "react";
import Home from "./components/Home";
import Matches from "./components/Matches";

function App() {
  const [count, setCount] = useState(25);
  const [start, setStart] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [computerCount, setComputerCount] = useState(0);
  const [changeMode, setChangeMode] = useState(true);

  const firstMove = useCallback(() => {
    const number = Math.floor(Math.random() * (4 - 1)) + 1;
    setCount(count - number);
    setComputerCount((prevCount) => prevCount + number);
  }, []);

  useEffect(() => {
    if (start && !changeMode) {
      firstMove();
    }
  }, [changeMode, start, firstMove]);
  useEffect(() => {
    if (count === 1) {
      alert("You lose!!!");
      reset();
      if (!changeMode) {
        firstMove();
      }
    }
    if (count === 0) {
      alert("You win!!!");
      reset();
      if (!changeMode) {
        firstMove();
      }
    }
  }, [count, changeMode, firstMove]);

  const reset = () => {
    setCount(25);
    setUserCount(0);
    setComputerCount(0);
  };
  const toggleStart = () => setStart(!start);

  const toggleMode = () => setChangeMode(!changeMode);

  const onRemove = (event) => {
    const num = Number(event.target.textContent);
    setUserCount((prevCount) => prevCount + num);

    setCount((prevCount) => prevCount - (4 - num));
    computerRemove(event);
  };
  const computerRemove = (event) => {
    const num = Number(event.target.textContent);
    setComputerCount((prevCount) => prevCount + (4 - num));
    setCount((prevCount) => prevCount - num);
  };

  return (
    <>
      {start ? (
        <div>
          <button
            className="button-back"
            onClick={() => {
              toggleStart();
              reset();
            }}
          >
            🔙
          </button>

          <Matches count={computerCount} />
          <h2>Matches left : {count}</h2>
          <Matches count={count} />

          <ul className="buttons">
            <li>
              <button onClick={onRemove}>1</button>
            </li>
            {count > 2 && (
              <li>
                <button onClick={onRemove}>2</button>
              </li>
            )}
            {count > 3 && (
              <li>
                <button onClick={onRemove}>3</button>
              </li>
            )}
          </ul>

          <Matches count={userCount} />
        </div>
      ) : (
        <Home
          toggleStart={toggleStart}
          toggleMode={toggleMode}
          changeMode={changeMode}
        />
      )}
    </>
  );
}

export default App;
