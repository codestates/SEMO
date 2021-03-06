import styled from "styled-components";
import { useStore, useStoreTemp } from "../zustand/store";
import Button from "./button";

export const DropdownContainer = styled.div`
  /* border: 1px solid red; */
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  padding: 10px 0;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    gap: 8vw;
    padding: 2.5vw 0;
  }

  @media screen and (min-width: 1001px) {
    gap: 80px;
    padding: 25px 0;
  }
  .search {
  }
`;

const Selecttag = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-align-last: center;
  background-color: #a573ff;
  border: 2px solid #7a57d1;
  font-size: 11px;
  border-radius: 10px;
  padding: 5px 0;
  width: 64px;
  cursor: pointer;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    font-size: 3vw;
    border-radius: 2.6vw;
    padding: 1.3vw 0;
    width: 17vw;
  }

  @media screen and (min-width: 1001px) {
    font-size: 30px;
    border-radius: 26px;
    padding: 13px 0;
    width: 170px;
  }
`;

const Dropdown = (props) => {
  const {
    school,

    selectSchool,

    selectGrade,
    selectsubject,
  } = useStore();
  const { isSearch } = useStoreTemp();

  const selectSchoolHandler = (e) => {
    selectSchool(e.target.value);
  };

  const selectGradeHandler = (e) => {
    selectGrade(e.target.value);
  };

  const selectSubjectHandler = (e) => {
    selectsubject(e.target.value);
  };

  return (
    <DropdownContainer>
      <Selecttag
        name="school"
        id="school-select"
        onChange={selectSchoolHandler}
      >
        <option value="school">학교</option>
        <option value="elementary">초등학교</option>
        <option value="middle">중학교</option>
        <option value="high">고등학교</option>
      </Selecttag>
      {school === "elementary" ? (
        <Selecttag name="grade" id="grade-select" onChange={selectGradeHandler}>
          <option value="grade">학년</option>
          <option value="lv1">1학년</option>
          <option value="lv2">2학년</option>
          <option value="lv3">3학년</option>
          <option value="lv4">4학년</option>
          <option value="lv5">5학년</option>
          <option value="lv6">6학년</option>
        </Selecttag>
      ) : (
        <Selecttag name="grade" id="grade-select" onChange={selectGradeHandler}>
          <option value="grade">학년</option>
          <option value="lv1">1학년</option>
          <option value="lv2">2학년</option>
          <option value="lv3">3학년</option>
        </Selecttag>
      )}

      <Selecttag
        name="subject"
        id="subject-select"
        onChange={selectSubjectHandler}
      >
        <option value="subject">과목</option>
        <option value="korean">국어</option>
        <option value="english">영어</option>
        <option value="math">수학</option>
        <option value="social">사회</option>
        <option value="science">과학</option>
        <option value="artsandsports">예체능</option>
      </Selecttag>

      {isSearch === true ? (
        <Button className="search" onClick={props.searchHandler}>
          조회하기
        </Button>
      ) : (
        ""
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
