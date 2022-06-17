import styled from "styled-components";
import Button from "./button";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 25px;
  background: #cccccc;
  height: 60vw;
  .showMyquestionBtn {
    font-size: 4vw;
    background-color: #cccccc;
    border: 0px solid #7a57d1;
    border-radius: 0px;
    width: 40vw;
    a:hover {
      background-color: orange;
      border-radius: 7px;
    }
  }
`;

const MyAnswer = () => {
  return (
    <Container>
      <Button className="showMyquestionBtn">
        <Link to="/myanswerlist">내 답변보러가기</Link>
      </Button>
    </Container>
  );
};

export default MyAnswer;
