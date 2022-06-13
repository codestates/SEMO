import styled from "styled-components";
import Button from "./button";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 25px;
  background: #ffffff;
  height: 60vw;
  .showMyquestionBtn {
    font-size: 4vw;
    background-color: #ffffff;
    border: 0px solid #7a57d1;
    border-radius: 0px;
    width: 40vw;
    a:hover {
      background-color: orange;
      border-radius: 7px;
    }
  }
`;

const Myquestion = () => {
  return (
    <Container>
      <Button className="showMyquestionBtn">
        <Link to="/questionlist">
          <div>내 질문 보러가기</div>{" "}
        </Link>
      </Button>
    </Container>
  );
};

export default Myquestion;
