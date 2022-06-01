import styled from "styled-components";
import image1 from "../images/mainimage1.jpg";
import Button from "../components/button";

const Header_container = styled.div`
  border: 1px solid red;
  width: 100vw;
  height: 10vh;
`;

const Itemas_container = styled.div`
  /* border: 1px solid blue; */
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Img_container = styled.img`
  /* border: 1px solid green; */
  width: 40vw;
  height: 31.5vw;
`;

const Itemas_container1 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text_container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid purple; */

  .btn1 {
    font-size: 3vw;
    width: 17vw;
    height: 17vh;
  }
`;

const Mainpage_login = () => {
  return <div>123213123123213</div>;
};

export default Mainpage_login;
