import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    display: flex; 
    flex-direction: column; 
    align-items: flex-start;
    justify-content: flex-end; 
    flex: 1;

    h1 {
    
      font-size: 100px;
      white-space: nowrap;
      margin:20px
    
      
    }

    button {
        margin-left: 354px;
    }
  }
`;
