import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useStoreTemp, useUserinfo } from "../zustand/store";
import { Link } from "react-router-dom";
import { BsChatDots } from "react-icons/bs";

const Container = styled.div`
  /* border: 1px solid green; */
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 4vw 0;
`;
const QuestionContainer = styled.div`
  /* border: 5px solid red; */
  padding-bottom: 3vw;
  width: 100vw;
  word-break: break-word;
`;
const QuestionTitle = styled.strong`
  font-size: 3vw;
  font-weight: 900;
  display: flex;
  padding: 1vw 2vw;
  gap: 1vw;
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
  gap: 3vw;
  font-size: 2vw;
  padding: 0 2vw;

  > span {
    border-left: 1px solid gray;
    padding-left: 3vw;
  }
`;

// const Container = styled.div``;

const AllMyAnswer = () => {
  const [aLists, setALists] = useState([]);
  const { clickTitle, setClickTitle } = useStoreTemp();
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
