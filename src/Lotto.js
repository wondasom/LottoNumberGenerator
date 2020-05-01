import React from "react";
import Button from "./Button";

const getRandomNumber = () => Math.floor(Math.random() * 46);

const Lotto = () => {
  const [numbers, setNumbers] = React.useState([
    "🔥",
    "🔥",
    "🔥",
    "🔥",
    "🔥",
    "🔥"
  ]);

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
    <div className="Lotto">
      <h1>
        Lucky Numbers
        <span role="img" aria-label="congrats">
          {" "}
          🎉
        </span>{" "}
        for <span>LOTTO</span>
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
    </div>
  );
};

export default Lotto;
