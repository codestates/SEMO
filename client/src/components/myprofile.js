import styled from "styled-components";
import profileimg from "../images/제경모.jpg"
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
  `
  const ProfileContainer =styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      gap: 5px;
      width: 25vw;
      height: 25vw;
  `
  const Profileimg = styled.img.attrs({
      src: `${profileimg}`,
    })`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;   
      width: 20vw;
      height: 20vw;
      border-radius: 99px;
      padding 0 0 5px;
    `;
  const BtnContainer =styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4vw;
    width: 30vw;
    height: 14vw;
    padding: 0 0 18vw;
    .btn{
        font-size: 3vw;
        width : 24vw        
    }
    `
const Myprofile = () => {
    return (
        <Container>
            <ProfileContainer>
              <Profileimg/>
              <div>서양범고래</div>
            </ProfileContainer>
            <BtnContainer>
              <Button className="btn" >닉네임 수정</Button>
              <Button className="btn">비밀번호 수정</Button>
              <Button className="btn">사진 수정</Button>
            </BtnContainer>
        </Container>    
    );
};
export default Myprofile;
