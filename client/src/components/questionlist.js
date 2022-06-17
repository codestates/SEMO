import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useStoreTemp, useUserinfo } from "../zustand/store";
import { Link } from "react-router-dom";
import { BsChatDots } from "react-icons/bs";

const Container = styled.div`
  /* border: 1px solid red; */
  max-width: 1000px;
  margin: 0 auto;
  padding: 3vw 0;
`;
const QuestionContainer = styled.div`
  /* border: 5px solid green; */
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
  /* border: 5px solid pink; */
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
  /* border: 5px solid blueviolet; */
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
    gap: 2.75vw;
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
    padding-left: 11px;

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

const Allquestions = () => {
  const [qLists, setQLists] = useState([]);
  const { clickTitle, setClickTitle, setClickCreatedAt } = useStoreTemp();
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
      setQLists(data);
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
        {qLists
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <QuestionContainer key={item.id} item={item}>
                <NicnNDate>
                  <Link className="link" to="/answer">
                    <QuestionTitle
                      onClick={() => {
                        viewQuestion(item.title);
                        setClickCreatedAt(item.createdAt);
                      }}
                    >
                      <BsChatDots color="black" /> {item.title}
                    </QuestionTitle>
                  </Link>
                  <Text>
                    <span> {nickname}</span>
                    <span> {item.updatedAt.slice(5, 10)}</span>
                  </Text>
                </NicnNDate>
              </QuestionContainer>
            );
          })}
      </div>
    </Container>
  );
};

export default Allquestions;
