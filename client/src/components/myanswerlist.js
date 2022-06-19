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
  padding: 0 5px;
  gap: 5px;
  font-size: 8px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    padding: 0 1.3vw;
    gap: 1.3vw;
    font-size: 2vw;
  }

  @media screen and (min-width: 1001px) {
    padding: 0 13px;
    gap: 13px;
    font-size: 20px;
  }
`;

const Nickname = styled.div`
  border-left: 1px solid gray;
  padding-left: 5px;
  width: 61px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    padding-left: 1.3vw;
    width: 17vw;
  }

  @media screen and (min-width: 1001px) {
    padding-left: 13px;
    width: 170px;
  }
`;

const UpdatedAt = styled.div`
  border-left: 1px solid gray;
  display: flex;
  justify-content: center;
  padding-left: 5px;
  width: 25px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    padding-left: 1.3vw;
    width: 6.7vw;
  }

  @media screen and (min-width: 1001px) {
    padding-left: 13px;
    width: 67px;
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
  };
  const textInput = useRef();

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
                    <Nickname>{nickname}</Nickname>
                    <UpdatedAt>{item.updatedAt.slice(5, 10)}</UpdatedAt>
                  </Text>
                </NicnNDate>
                <Link to="/myanswerview">
                  <QuestionTitle
                    onClick={() => {
                      viewQuestion(item.title);
                      setClickCreatedAt(item.image);
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
