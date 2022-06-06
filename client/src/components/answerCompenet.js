import styled from "styled-components";
import Button from "./button";
import Header from "./header";
import { useState } from "react";

const AnswerContainer =styled.div`
    display:flex;
    justify-content: center;
`
const AnswerTitle =styled.div`
    display:flex;
    width:80vw;
    height: 2vw;
    background: #cccccc;
    border-radius: 2vw;
    padding:3vw;
   
`

const TextContainer =styled.div`
    display:flex;
    justify-content: center;
    
`
const AnswerText =styled.div`
    display:flex;
    width:80vw;
    height: 2vw;
    background: #cccccc;
    border-radius: 2vw;
    padding:3vw;
    height: 300px;
    margin: 5vw;
`
const ButtonContainer=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    gap: 10vw;
`

const Answer = () => { 
   
    return ( 
    <>
       <AnswerContainer>
          <AnswerTitle>
              sfdfsdfsdfsdfds
          </AnswerTitle>
        </AnswerContainer>
        <TextContainer> 
          <AnswerText>
             예상외의 복병 
             높이 얼마나? 
          </AnswerText>
         </TextContainer>
         <ButtonContainer>
            <Button>문제풀기</Button>
            <Button>수정</Button>
            <Button>삭제</Button>
         </ButtonContainer>
    </>
    )

   

}

export default Answer;