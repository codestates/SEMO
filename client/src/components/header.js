import styled from "styled-components";
import logo from "../images/logo.png";
import Button from "../components/button.js";

const HeadDiv = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  width: 100vw;
`;

const Logoimage = styled.img.attrs({
  src: `${logo}`,
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 17vw;
  height: 17vw;
`;
const Btndiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 2vw;
  margin-top: auto;
  .headerBtn {
    font-size: 3vw;
    width: 17vw;
  }
`;
const Header = () => {
  return (
    <HeadDiv>
      <Logoimage />

      <Btndiv>
        <Button className="headerBtn">로그인</Button>
        <Button className="headerBtn">회원가입</Button>
      </Btndiv>
    </HeadDiv>
  );
};

export default Header;
