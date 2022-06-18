import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useStoreTemp, useUserinfo } from "../zustand/store";
import { Link } from "react-router-dom";
import { BsChatDots } from "react-icons/bs";

const Container = styled.div`
  /* border: 1px solid green; */
  max-width: 1000px;
  margin: 0 auto;
  padding: 3vw 0;
`;
const QuestionContainer = styled.div`
  /* border: 5px solid red; */
  padding-bottom: 11px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    /* border: 1px solid green; */
    padding-bottom: 3vw;
  }

  @media screen and (min-width: 1001px) {
    padding-bottom: 20px;
  }
`;
const QuestionTitle = styled.strong`
  /* border: 1px solid red; */
  width: 230px;
  font-size: 11px;
  font-weight: 900;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 8px;
  text-decoration: none;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    /* border: 1px solid green; */
    padding: 1vw 2vw;
    width: 62vw;
    font-size: 3vw;
  }

  @media screen and (min-width: 1001px) {
    padding: 1px 20px;
    width: 620px;
    font-size: 30px;
  }
`;
const NicnNDate = styled.div`
  /* border: 10px solid gold; */
  border-bottom: 1.5px solid gray;
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
`;

const Text = styled.span`
  /* background-color: red; */
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 8px;
  padding: 0 8px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    gap: 3vw;
    font-size: 2.5vw;
    padding: 0 2vw;
  }

  @media screen and (min-width: 1001px) {
    gap: 20px;
    font-size: 25px;
    padding: 0 20px;
  }

  > span {
    border-left: 1px solid gray;
    padding-left: 3vw;

    @media screen and (min-width: 401px) and (max-width: 1000px) {
      border-left: 1px solid gray;
      padding-left: 2.75vw;
    }

    @media screen and (min-width: 1001px) {
      border-left: 1px solid gray;
      padding-left: 28px;
    }
  }
`;

// const Container = styled.div``;

const AllMyAnswer = () => {
  const [aLists, setALists] = useState([]);
  const { clickTitle, setClickTitle, setClickCreatedAt } = useStoreTemp();
  const { user_id, nickname } = useUserinfo();
  const getPosts = async () => {
    try {
      const response = await axios.post("http://localhost:3500/myanswer/all", {
        user_id,
      });
      return response.data;
    } catch (error) {}
  };
  const testList = getPosts();
  useEffect(() => {
    testList.then((data) => {
      setALists(data);
    });
  }, []);
  const viewQuestion = (e) => {
    setClickTitle(e);
    console.log("123", clickTitle);
  };
  const textInput = useRef();
  const magicBtn = () => {
    console.log(testList);
  };
  return (
    <Container>
      <div>
        {aLists
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <QuestionContainer key={item.id} item={item}>
                <NicnNDate>
                  <QuestionTitle>
                    <BsChatDots color="black" />
                    {item.title}
                  </QuestionTitle>
                  <Text>
                    <span>{nickname}</span>
                    <span>{item.updatedAt.slice(5, 10)}</span>
                  </Text>
                </NicnNDate>
                <Link to="/myanswerview">
                  <QuestionTitle
                    onClick={() => {
                      viewQuestion(item.title);
                      setClickCreatedAt(
                        `img/${item.createdAt.slice(0, 19)}_.jpg`
                      );
                    }}
                  >
                    {item.content}
                  </QuestionTitle>
                </Link>
              </QuestionContainer>
            );
          })}
      </div>
    </Container>
  );
};

export default AllMyAnswer;
