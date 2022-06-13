import styled from "styled-components";
import Dropdown from "../components/dropdownmenu";
import Header from "../components/header";
import Footer from "../components/footer";
import profileimg from "../images/제경모.jpg";

const NoticeContainer = styled.div`
  box-sizing: border-box;
  /* border: 10px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2vw 0;
`;

const ItemContainer = styled.div`
  border: 1px solid blue;
  width: 42.5vw;
  height: 42.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.img.attrs({
  src: `${profileimg}`,
})`
  width: 33vw;
  height: 33vw;
  border-radius: 5vw;
`;

const ItemTexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  return (
    <>
      <Header />
      <Dropdown />
      <>
        <NoticeContainer>
          <ItemContainer>
            <ImgContainer />
            <ItemTexContainer>
              <p>제목</p>
              <p>닉네임</p>
            </ItemTexContainer>
          </ItemContainer>

          <ItemContainer>
            <ImgContainer />
            <ItemTexContainer>
              <p>제목</p>
              <p>닉네임</p>
            </ItemTexContainer>
          </ItemContainer>
        </NoticeContainer>
      </>
      <>
        <NoticeContainer>
          <ItemContainer>
            <ImgContainer />
            <ItemTexContainer>
              <p>제목</p>
              <p>닉네임</p>
            </ItemTexContainer>
          </ItemContainer>

          <ItemContainer>
            <ImgContainer />
            <ItemTexContainer>
              <p>제목</p>
              <p>닉네임</p>
            </ItemTexContainer>
          </ItemContainer>
        </NoticeContainer>
      </>
      <>
        <NoticeContainer>
          <ItemContainer>
            <ImgContainer />
            <ItemTexContainer>
              <p>제목</p>
              <p>닉네임</p>
            </ItemTexContainer>
          </ItemContainer>

          <ItemContainer>
            <ImgContainer />
            <ItemTexContainer>
              <p>제목</p>
              <p>닉네임</p>
            </ItemTexContainer>
          </ItemContainer>
        </NoticeContainer>
      </>
      <>
        <NoticeContainer>
          <ItemContainer>
            <ImgContainer />
            <ItemTexContainer>
              <p>제목</p>
              <p>닉네임</p>
            </ItemTexContainer>
          </ItemContainer>

          <ItemContainer>
            <ImgContainer />
            <ItemTexContainer>
              <p>제목</p>
              <p>닉네임</p>
            </ItemTexContainer>
          </ItemContainer>
        </NoticeContainer>
      </>

      <Footer />
    </>
  );
};

export default Main;
