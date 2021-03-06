import styled from "styled-components";
import image1 from "../images/mainimage1.jpg";
import image2 from "../images/mainimage2.jpg";
import image3 from "../images/mainimage3.jpg";
import image4 from "../images/mainimage4.jpg";
import Button from "../components/button";
import Header from "../components/header";
import Footer from "../components/footer";
import LoginModalComponent from "../modals/loginmodal";
import SignupModalComponent from "../modals/signupmodal";
import SimpleSlider from "../components/slickslide";
import { useStore, useStoreTemp } from "../zustand/store";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeProvider";
import AppLayout from "../components/AppLayout";

const ItemasContainer = styled.div`
  /* border: 1px solid blue; */
  max-width: 1000px;
  margin: 0 auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  box-sizing: border-box;
`;

const ImgContainer = styled.img`
  /* border: 1px solid green; */
  width: 150px;
  height: 118px;
  padding: 5px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    /* border: 1px solid green; */
    width: 37.4065vw;
    height: 29.4264vw;
  }

  @media screen and (min-width: 1001px) {
    height: 294.25px;
    width: 374.062px;
  }
`;

const ItemasContainer1 = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextContainer = styled.div`
  /* border: 1px solid purple; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .h1 {
    font-size: 5vw;
    font-weight: bold;

    @media screen and (min-width: 1001px) {
      font-size: 50px;
      font-weight: bold;
    }
  }
  > .h2 {
    font-size: 4vw;
    font-weight: bold;

    @media screen and (min-width: 1001px) {
      font-size: 40px;
      font-weight: bold;
    }
  }

  .btn1 {
    font-size: 2.5vw;
    width: 20vw;
    height: 5vw;

    @media screen and (min-width: 1001px) {
      font-size: 25px;
      width: 200px;
      height: 50px;
    }
  }
`;

const Main = () => {
  const { loginmodal, signupmodal, islogin, openLoginModal } = useStore();
  const { isSearch, setisSearchTrue, setisSearchFalse, nickname } =
    useStoreTemp();

  return (
    <>
      <Header />
      <AppLayout />
      <ItemasContainer>
        <ItemasContainer1>
          <TextContainer>
            <p className="h1">????????? ????????????????</p>
            <p className="h2">?????? ?????? ???????????????!</p>
            {islogin === false ? (
              <Button
                className="btn1"
                onClick={() => {
                  setisSearchFalse();
                  openLoginModal();
                }}
              >
                ???????????? ??????
              </Button>
            ) : (
              <Link to="/writequestion">
                <Button
                  className="btn1"
                  onClick={() => {
                    setisSearchFalse();
                  }}
                >
                  ???????????? ??????
                </Button>
              </Link>
            )}
          </TextContainer>
          <ImgContainer src={image1} alt="" />
        </ItemasContainer1>

        <ItemasContainer1>
          <TextContainer>
            <p className="h1">????????? ????????????????</p>
            <p className="h2">?????? ?????? ?????????!</p>
            {islogin === false ? (
              <Button
                className="btn1"
                onClick={() => {
                  setisSearchTrue();
                  openLoginModal();
                }}
              >
                ???????????? ??????
              </Button>
            ) : (
              <Link to="/noticeboard">
                <Button
                  className="btn1"
                  onClick={() => {
                    setisSearchTrue();
                  }}
                >
                  ???????????? ??????
                </Button>
              </Link>
            )}
          </TextContainer>
          <ImgContainer src={image2} alt="" />
        </ItemasContainer1>

        <ItemasContainer1>
          <ImgContainer src={image3} alt="" />
          <TextContainer>
            <p className="h1">01</p>
            <p className="h2">???????????? ?????????</p>
            <p className="h2">????????? ????????? ??? ?????????!</p>
          </TextContainer>
        </ItemasContainer1>

        <ItemasContainer1>
          <ImgContainer src={image4} alt="" />
          <TextContainer>
            <p className="h1">02</p>
            <p className="h2">????????? ??????</p>
            <p className="h2">????????? ????????? ??? ?????????!</p>
          </TextContainer>
        </ItemasContainer1>
        <Footer />
      </ItemasContainer>
      {loginmodal === true ? <LoginModalComponent /> : null}
      {signupmodal === true ? <SignupModalComponent /> : null}
    </>
  );
};

export default Main;
