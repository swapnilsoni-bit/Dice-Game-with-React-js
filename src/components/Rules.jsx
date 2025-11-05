import styled from "styled-components";

const Rules = () => {
  const rules = [
    "Select any number between 1 to 6",
    "Click on the dice to roll it",
    "If your selected number matches the dice number, you get points equal to the dice value",
    "If you guess wrong, 2 points will be deducted from your score",
    "Keep playing and try to get the highest score!",
  ];

  return (
    <RulesContainer>
      <RulesTitle>How to Play</RulesTitle>
      <RulesList>
        {rules.map((rule, index) => (
          <RuleItem key={index}>
            <RuleNumber>{index + 1}</RuleNumber>
            <RuleText>{rule}</RuleText>
          </RuleItem>
        ))}
      </RulesList>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  padding: 40px;
  margin-top: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.6s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const RulesTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 25px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const RulesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RuleItem = styled.li`
  display: flex;
  gap: 15px;
  align-items: flex-start;
  animation: slideIn 0.5s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const RuleNumber = styled.span`
  min-width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
`;

const RuleText = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin: 0;
`;
