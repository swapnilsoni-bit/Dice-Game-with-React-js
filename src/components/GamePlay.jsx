import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton, DangerButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [lastResult, setLastResult] = useState(null);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      setLastResult(null);
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
      setLastResult({
        success: true,
        points: randomNumber,
      });
    } else {
      setScore((prev) => prev - 2);
      setLastResult({
        success: false,
        points: -2,
      });
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(undefined);
    setCurrentDice(1);
    setError("");
    setLastResult(null);
  };

  return (
    <MainContainer>
      <TopSection>
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </TopSection>

      <RoleDice roleDice={roleDice} currentDice={currentDice} />

      {lastResult && (
        <ResultMessage success={lastResult.success}>
          {lastResult.success
            ? `🎉 Correct! You won ${lastResult.points} points!`
            : `❌ Wrong! You lost 2 points.`}
        </ResultMessage>
      )}

      <ButtonsContainer>
        <Button onClick={roleDice}>Roll Dice</Button>
        <DangerButton onClick={resetScore}>Reset Score</DangerButton>
        <OutlineButton onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </OutlineButton>
      </ButtonsContainer>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  max-width: 1000px;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-bottom: 40px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  max-width: 300px;

  button {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const ResultMessage = styled.div`
  background: ${(props) =>
    props.success
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "linear-gradient(135deg, #f5576c 0%, #ff6b6b 100%)"};
  color: white;
  padding: 16px 24px;
  border-radius: 12px;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  animation: popIn 0.5s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  @keyframes popIn {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
