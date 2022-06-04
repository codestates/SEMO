import styled from "styled-components";
import Button from "./button";
import { useState } from "react";

const ContainQuestion =styled.div`
    diplay:flex;
  
`
const InputTitleBox = styled.input`
    width: 80vw;
    height: 2vw;
    margin 5 0 2 0vw;
    background: #cccccc;
    border-radius: 2vw;
    padding:3vw;
    
`
const InputTextBox =styled.textarea`
    
    width: 80vw;
    height: 50vw;
    margin 5vw;
    background: #cccccc;
    vertical-align: middle;
    border-radius: 2vw;
    padding:3vw;
    
`
const TitleContainer =styled.div`
    display:flex;
    justify-content: center;
    
`
const WritingContainer = styled.div`
    display:flex;
    justify-content: center;
   

`
const BtnContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    gap : 3vw;
    .btn {
    font-size: 2.5vw;
    width: 15vw;
    }

`

const ImageTest =styled.div`
   
`
const WriteQuestionComponenet = () => { 
    const [title,setTitle]=useState("");
    const [text,setText]=useState("");
    
    const titleHandler = (e)=> {
        setTitle(e.target.value)
    }
    const textHandler = (e)=> {
        setText(e.target.value)
    }
    const testFn = () =>{
        console.log("@@@@@@@@@@@@@@@@타이틀@@@@@@@@",title,"@@@@@@@@@@@@@@@@텍스트@@@@@@@@",text)
    }
    const [fileImg,setfileImg] =useState("")
    const saveFileImg =(e) =>{
        setfileImg(URL.createObjectURL(e.target.files[0]))
    }
    const deleteFileImg =() => {
        URL.revokeObjectURL(fileImg);
        setfileImg("");
    }

    return (
        <>
       
        <ContainQuestion>
            <TitleContainer>
                <InputTitleBox 
                type="text" 
                placeholder="제목" 
                value={title}
                onChange={titleHandler}
                />
            </TitleContainer>

            
            <WritingContainer> 
                <InputTextBox 
                type="text" 
                placeholder="내용을 입력하세요" 
                value={text}
                onChange={textHandler}
                ></InputTextBox>
            </WritingContainer>
            <BtnContainer>
                
                <Button className="btn" onClick={testFn}>질문하기</Button>
                <Button className="btn">취소</Button>

            </BtnContainer>       
            {/* 아래는 사진 업로드 기능인데, db로 보내기랑 css수정해야함 */}
            <ImageTest>
                <div>사진 업로드 </div>
                    <div>image</div>
                    <div>
                        {fileImg &&(
                            <img alt="exam"
                                 src={fileImg}
                            />                            
                        )}
                        <input
                        name="imgUp"
                        type="file"
                        accept="image/*"
                        onChange={saveFileImg}
                        />
                        <Button onClick={()=> deleteFileImg()}>
                            삭제
                        </Button>
                    </div>
            </ImageTest>
        </ContainQuestion>
        </>
    )


}

export default WriteQuestionComponenet;



