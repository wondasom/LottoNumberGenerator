import React from "react";
import "./styles.css";

import Button from "./Button";

const getRandomNumber = () => Math.floor(Math.random() * 46);

export default function App() {
  const [numbers, setNumbers] = React.useState([1, 1, 1, 1, 1, 1]);

  const randomizeNumbers = React.useCallback(() => {
    const randomNumbers = [
      getRandomNumber(),
      getRandomNumber(),
      getRandomNumber(),
      getRandomNumber(),
      getRandomNumber(),
      getRandomNumber()
    ];

    setNumbers(randomNumbers);
  }, []);

  return (
    <div className="App">
      <h1>
        Lucky Numbers
        <span role="img" aria-label="congrats">
          {" "}
          🎉
        </span>{" "}
        for YOU
      </h1>
      <Button onRandomizeButtonClick={randomizeNumbers}>
        <span role="img" aria-label="fingers crossed">
          🤞🏼
        </span>
        fingers crossed
        <span role="img" aria-label="fingers crossed">
          🤞🏼
        </span>
      </Button>

      {numbers.map(number => (
        <div className="number">{number}</div>
      ))}
      {/*      
      <Numbers numbers={numbers} /> */}
    </div>
  );
}
