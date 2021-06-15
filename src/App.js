import { useState, useEffect, useCallback } from "react";
import Home from "./components/Home";

function App() {
  const startArray = new Array(25).fill("🦴");
  const [array, setArray] = useState(startArray);
  const [start, setStart] = useState(false);
  const [userArray, setUserArray] = useState([]);
  const [computerArray, setComputerArray] = useState([]);
  const [changeMode, setChangeMode] = useState(true);

  const firstMove = useCallback(() => {
    const number = Math.floor(Math.random() * (4 - 1)) + 1;
    const takenMatches = array.splice(array.length - number, number);
    setComputerArray((prevArray) => [...prevArray, ...takenMatches]);
  }, [array]);

  useEffect(() => {
    if (start && !changeMode) {
      firstMove();
    }
  }, [changeMode, start, firstMove]);

  const reset = () => {
    setArray(startArray);
    setUserArray([]);
    setComputerArray([]);
  };
  const toggleStart = () => setStart(!start);

  const toggleMode = () => setChangeMode(!changeMode);

  const onRemove = (event) => {
    const num = Number(event.target.textContent);
    const takenMatches = array.splice(array.length - num, num);
    setUserArray((prevArray) => [...prevArray, ...takenMatches]);
    const res = [...array];
    setArray(res);
    computerRemove(event);

    if (res.length === 1) {
      alert("You are win!!!");
      reset();
      if (!changeMode) {
        firstMove();
      }
    }
  };

  const computerRemove = (event) => {
    const num = Number(event.target.textContent);

    const takenMatches = array.splice(array.length - (4 - num), 4 - num);

    setComputerArray((prevArray) => [...prevArray, ...takenMatches]);
    setArray([...array]);

    if (array.length === 1) {
      alert("You are lose!!!");
      reset();

      if (!changeMode) {
        console.log(firstMove());
        firstMove();
      }
    }
  };

  return (
    <>
      {start ? (
        <div>
          <button className='button-back'
            onClick={() => {
              toggleStart();
              reset();
            }}
          >
            🔙
          </button>
          <ul>
            {computerArray.map((arr, index) => (
              <li key={index}>{arr}</li>
            ))}
          </ul>
          <h2>Matches left : {array.length}</h2>
          <ul>
            {array.map((arr, index) => (
              <li key={index}>{arr}</li>
            ))}
          </ul>

          <ul className="buttons">
            <li>
              <button onClick={onRemove}>1</button>
            </li>
            {array.length > 2 && (
              <li>
                <button onClick={onRemove}>2</button>
              </li>
            )}
            {array.length > 3 && (
              <li>
                <button onClick={onRemove}>3</button>
              </li>
            )}
          </ul>

          <ul>
            {userArray.map((arr, index) => (
              <li key={index}>{arr}</li>
            ))}
          </ul>
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
