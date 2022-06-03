import styled from "styled-components";
import Button from "./button";
import Header from "./header";

const ContainQuestion =styled.div`
    diplay:flex;
`
const InputTitleBox = styled.input`
    width: 80vw;
    height: 5vw;
`
const InputTextBox =styled.textarea`
    width: 80vw;
    height: 50vw;
`
const TitleContainer =styled.div`
    diplay:flex;
    flex-align: 
background-color: #282c34;

`
const WritingContainer = styled.div`


`
const BtnContainer = styled.div`
background-color: #282c34;

`

const WriteQuestionComponenet = () => { 
    return (
        <>
        <Header></Header>
        <ContainQuestion>
            <TitleContainer>
                <InputTitleBox type="text" placeholder="제목"/>
            </TitleContainer>

            
            <WritingContainer> 
                <InputTextBox placeholder="내용을 입력하세요"></InputTextBox>
            </WritingContainer>
            <BtnContainer>
                <Button>질문하기</Button>
                <Button>취소</Button>

            </BtnContainer>
           
        </ContainQuestion>
        </>
    )


}

export default WriteQuestionComponenet;



