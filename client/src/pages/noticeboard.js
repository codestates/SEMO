import styled from "styled-components";
import Dropdown from "../components/dropdownmenu";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const NoticeContainer = styled.div`
  box-sizing: border-box;
  /* border: 10px solid red; */
  display: flex;
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

const ImgContainer = styled.img`
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
    console.log(test123[0].createdAt);
  };

  const test9999 = noticeHandler();
  const [test123, setTest123] = useState([]);

  useEffect(() => {
    test9999.then((data) => {
      setTest123(data.data);
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
          {test123
            .slice(0)
            .reverse()
            .map((el) => {
              return (
                <ItemContainer key={el.createdAt}>
                  <ImgContainer
                    src={`../images/${el.createdAt}_.jpg`}
                    alt="sssss"
                  />
                  <ItemTexContainer>
                    <p>{el.title}</p>
                    <p>{el.nickname}</p>
                  </ItemTexContainer>
                </ItemContainer>
              );
            })}
        </NoticeContainer>
      </>
      <Footer />
    </>
  );
};

export default Main;
