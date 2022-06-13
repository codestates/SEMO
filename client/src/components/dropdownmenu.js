import styled from "styled-components";
import { useStore } from "../zustand/store";

export const DropdownContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5vw;
`;

const Selecttag = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-align-last: center;
  font-size: 3vw;
  background-color: #a573ff;
  border: 2px solid #7a57d1;
  border-radius: 10px;
  padding: 5px 0;
  width: 17vw;
  cursor: pointer;
`;

const Dropdown = () => {
  const { school, selectSchool, selectGrade, selectsubject } = useStore();

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
    </DropdownContainer>
  );
};

export default Dropdown;
