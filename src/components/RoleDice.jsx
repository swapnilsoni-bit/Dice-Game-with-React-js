import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <DiceButton onClick={roleDice}>
        {currentDice}
      </DiceButton>
      <InstructionText>Click on Dice to Roll</InstructionText>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;

const DiceButton = styled.button`
  width: 120px;
  height: 120px;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 48px;
  font-weight: 800;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05) rotateZ(-5deg);
    box-shadow: 0 16px 40px rgba(102, 126, 234, 0.6);
  }

  &:active {
    transform: scale(0.98) rotateZ(5deg);
  }
`;

const InstructionText = styled.p`
  font-size: 14px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;
