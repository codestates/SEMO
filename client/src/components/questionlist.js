import styled from "styled-components";
import Button from "./button";
//import useState from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";

const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;
`;
const QuestionContainer = styled.div`
  padding-bottom: 3vw;
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

const Allquestions = () => {
  const [qLists, setQLists] = useState([]);
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

    // console.log("123123jksdfjsldjfljdslfjdslkjf");
    // axios
    //   .post("http://localhost:3500/myquestion/all", {
    //     user_id,
    //   })
    //   .then((res) => {
    //     console.log("123123123123123123123123123");
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  const testList = getPosts();
  useEffect(() => {
    testList.then((data) => {
      setQLists(data);
    });
  }, []);
  return (
    <Container>
      <div>
        {qLists.map((item) => {
          console.log(item);
          return (
            <QuestionContainer key={item.id} item={item}>
              {/* <p>{`${item?.subject} 있나`}</p> */}

              <NicnNDate>
                <span>작성자 : {nickname}</span>
                <span>작성일자 : {item.updatedAt.slice(5, 10)}</span>
              </NicnNDate>
              <QuestionTitle>{item.title}</QuestionTitle>
            </QuestionContainer>
          );
        })}
      </div>
    </Container>
  );
};

export default Allquestions;
