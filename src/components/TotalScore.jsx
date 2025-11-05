import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <ScoreValue>{score}</ScoreValue>
      <ScoreLabel>Total Score</ScoreLabel>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px 50px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 280px;
  animation: scoreGlow 2s ease-in-out infinite;

  @keyframes scoreGlow {
    0%, 100% {
      box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
    }
    50% {
      box-shadow: 0 12px 40px rgba(102, 126, 234, 0.5);
    }
  }
`;

const ScoreValue = styled.h1`
  font-size: 72px;
  font-weight: 800;
  color: white;
  line-height: 1;
  margin-bottom: 10px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const ScoreLabel = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 2px;
`;
