import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <ContentWrapper>
        <LeftContent>
          <Logo>🎲</Logo>
          <Title>Dice Game</Title>
          <Subtitle>Test your luck and strategy!</Subtitle>
          <Description>
            Select a number from 1-6, roll the dice, and match to win points!
          </Description>
          <Button onClick={toggle}>Play Now</Button>
        </LeftContent>
        <RightContent>
          <DiceIllustration>
            <DiceBox>1</DiceBox>
            <DiceBox>2</DiceBox>
            <DiceBox>3</DiceBox>
            <DiceBox>4</DiceBox>
            <DiceBox>5</DiceBox>
            <DiceBox>6</DiceBox>
          </DiceIllustration>
        </RightContent>
      </ContentWrapper>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  color: #333;
  animation: slideInLeft 0.8s ease;

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Logo = styled.div`
  font-size: 80px;
  margin-bottom: 20px;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: 800;
  margin-bottom: 15px;
  color: #333;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 15px;
  color: #555;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
  color: #666;
  line-height: 1.6;
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  animation: slideInRight 0.8s ease;

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const DiceIllustration = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  gap: 20px;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const DiceBox = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  color: white;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1) rotateZ(5deg);
  }
`;
