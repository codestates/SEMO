import styled from "styled-components";
import Button from "./button";
//import useState from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;
`;
const QuestionContainer = styled.div`
  padding-bottom: 3vw;

  width: 100vw;
`;
const QuestionTitle = styled.strong`
  font-weight: 900;
`;
const NicnNDate = styled.div`
  border-bottom: 2px solid;
  display: flex;
  justify-content: space-between;
`;
// const Container = styled.div``;

const AllMyAnswer = () => {
  const [aLists, setALists] = useState([]);
  const { clickTitle, setClickTitle } = useStoreTemp();
  const { user_id, nickname } = useUserinfo();
  const getPosts = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3500/myquestion/all",
        { user_id }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const testList = getPosts();
  useEffect(() => {
    testList.then((data) => {
      setALists(data);
    });
  }, []);
  const viewQuestion = (e) => {
    // setQLists(e);

    setClickTitle(e);
    console.log("123", clickTitle);
  };
  const textInput = useRef();

  return (
    <Container>
      <div>
        {aLists.map((item) => {
          return (
            <QuestionContainer key={item.id} item={item}>
              <NicnNDate>
                <span>작성자 : {nickname}</span>
                <span>작성일자 : {item.updatedAt.slice(5, 10)}</span>
              </NicnNDate>
              <Link to="/">
                <QuestionTitle
                  onClick={() => {
                    viewQuestion(item.title);
                  }}
                >
                  {item.title}
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
