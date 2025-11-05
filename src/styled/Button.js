import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 14px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.5);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const OutlineButton = styled(Button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 2px solid #667eea;
  color: white;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);

  &:hover {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.5);
    border: 2px solid #764ba2;
  }
`;

export const DangerButton = styled(Button)`
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  box-shadow: 0 8px 20px rgba(245, 87, 108, 0.3);

  &:hover {
    background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
    box-shadow: 0 12px 30px rgba(245, 87, 108, 0.5);
  }
`;
