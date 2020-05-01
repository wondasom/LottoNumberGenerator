import React from "react";
import Button from "./Button";

//for 5 random numbers between 1~50
const getRandomNumber = () => Math.ceil(Math.random() * 50);
const getRandomBonusNumbers = () => Math.floor(Math.random() * 10);

const EuroJackPot = () => {
  const [numbers, setNumbers] = React.useState([
    "🔥",
    "🔥",
    "🔥",
    "🔥",
    "🔥",
    "🔥"
  ]);
  const [bonusNumbers, setBonusNumbers] = React.useState(["🔥", "🔥"]);

  const randomizeNumbers = React.useCallback(() => {
    const randomNumbers = [
      getRandomNumber(),
      getRandomNumber(),
      getRandomNumber(),
      getRandomNumber(),
      getRandomNumber(),
      getRandomNumber()
    ];
    const randomBonusNumbers = [
      getRandomBonusNumbers(),
      getRandomBonusNumbers()
    ];

    setNumbers(randomNumbers);
    setBonusNumbers(randomBonusNumbers);
  }, []);

  return (
    <div className="EuroJP">
      <h1>
        Lucky Numbers
        <span role="img" aria-label="congrats">
          {" "}
          🎉
        </span>{" "}
        for <span>EUROJACKPOT</span>
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
      <p>bonus numbers</p>
      {bonusNumbers.map(number => (
        <div className="bonusNumber">{number}</div>
      ))}
    </div>
  );
};

export default EuroJackPot;
