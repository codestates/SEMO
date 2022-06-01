import styled from "styled-components";
import Button from "./button";

const Container = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px;
      gap: 25px;
      background: #CCCCCC;
      height : 60vw;
       .showMyquestionBtn{
        font-size: 4vw;
        background-color: #CCCCCC;
        border: 0px solid #7a57d1;
        border-radius: 0px;
        a:hover {
           background-color: orange;
           border-radius: 7px;
        
      };
  `
    

  const MyAnswer = () => { 
      return(
        <Container>
          <Button className="showMyquestionBtn"><a>내 답변보러가기</a> </Button>
        </Container>

      ) ;
  }
  
  export default MyAnswer;