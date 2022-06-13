import styled from "styled-components";
import Dropdown from "../components/dropdownmenu";
import Header from "../components/header";
import Footer from "../components/footer";
import profileimg from "../images/제경모.jpg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

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
  const noticeHandler = async () => {
    try {
      const response = await axios.get("http://localhost:3500/question/all");
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  const test555 = () => {
    console.log(test123);
  };

  const test9999 = noticeHandler();
  const [test123, setTest123] = useState([]);

  useEffect(() => {
    test9999.then((data) => {
      setTest123(data);
      console.log(data.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Dropdown />
      <button onClick={test555}>button2</button>
      <>
        <NoticeContainer>
          {test123.data.map((el) => {
            return (
              <ItemContainer>
                <ImgContainer />
                <ItemTexContainer>
                  <p key={el.id}>{el.title}</p>;<p>닉네임</p>
                </ItemTexContainer>
              </ItemContainer>
            );
          })}

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
