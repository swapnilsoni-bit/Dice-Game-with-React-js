import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <SelectLabel>Select a Number</SelectLabel>
      <FlexContainer>
        {arrNumber.map((value) => (
          <NumberBox
            key={value}
            isSelected={selectedNumber === value}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </NumberBox>
        ))}
      </FlexContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const SelectLabel = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const NumberBox = styled.button`
  width: 70px;
  height: 70px;
  border: 3px solid ${(props) => (props.isSelected ? "#667eea" : "#999")};
  background: ${(props) =>
    props.isSelected
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "white"};
  color: ${(props) => (props.isSelected ? "white" : "#333")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ErrorMessage = styled.span`
  color: #f5576c;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  animation: shake 0.5s ease;
  background: rgba(245, 87, 108, 0.1);
  padding: 10px 20px;
  border-radius: 8px;
  border-left: 4px solid #f5576c;

  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-10px);
    }
    75% {
      transform: translateX(10px);
    }
  }
`;
