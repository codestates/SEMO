import styled from "styled-components";
import logo from "../images/logo.png";
import Button from "../components/button.js";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";
import { Link } from "react-router-dom";

const HeadDiv = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  width: 100vw;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;
`;

const Logoimage = styled.img.attrs({
  src: `${logo}`,
})`
  width: 70px;
  height: 70px;
`;
const MyProFileImg = styled.img`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 38px;
  height: 38px;
  border-radius: 99px;
  padding: 0 0 0 0px;
`;
const UserNickName = styled.span`
  /* border: 1px solid blue; */
  font-size: 15px;
  font-weight: 900;
`;
const RightContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;

  @media screen and (min-width: 401px) {
    /* border: 1px solid green; */
    display: flex;
    gap: 2px;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: row;
  }
`;

const MyprofileContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: flex-end;
  gap: 5px;
  padding-left: 1vw;
`;
const Btndiv = styled.div`
  /* background-color: black; */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 8px;

  .headerBtn {
    font-size: 11px;
    width: 67px;

    @media screen and (min-width: 401px) and (max-width: 1000px) {
      font-size: 11px;
      width: 67px;
    }
  }
  .link {
    text-decoration: none;
  }

  .logout {
    font-size: 3vw;
    font-weight: 600;
  }

  .mypage {
    font-size: 3vw;
    font-weight: 600;
  }
`;

const Header = (props) => {
  const { openLoginModal, openSignupModal, islogin } = useStore();
  const { nickname, profile2 } = useUserinfo();
  const {
    clickMyPage,
    setClickMypage,
    setOffMypage,
    setSignOutModal,
    setisSearchTrue,
    isSearch,
  } = useStoreTemp();
  // onError={(i) => (i.target.src = "img/githublogo.png")}

  const errHandler = (i) => {
    i.target.src = "img/githublogo.png";
  };
  return (
    <>
      {islogin === false ? (
        <HeadDiv>
          <Link to="/">
            <Logoimage
              onClick={() => {
                setisSearchTrue();
              }}
            />
          </Link>
          <RightContainer>
            <Btndiv>
              <Button className="headerBtn" onClick={openLoginModal}>
                로그인
              </Button>
              <Button className="headerBtn" onClick={openSignupModal}>
                회원가입
              </Button>
            </Btndiv>
          </RightContainer>
        </HeadDiv>
      ) : (
        <HeadDiv>
          <Link
            to="/"
            onClick={() => {
              setisSearchTrue();
              console.log(isSearch);
            }}
          >
            <Logoimage onClick={setOffMypage} />
          </Link>
          <RightContainer>
            <MyprofileContainer>
              <MyProFileImg src={`${profile2}`} onError={errHandler} alt="1" />
              <UserNickName>{nickname}</UserNickName>
            </MyprofileContainer>
            <Btndiv>
              <Button className="headerBtn" onClick={props.openModalHandler}>
                로그아웃
              </Button>
              {clickMyPage === false ? (
                <Link className="link" to="/mypage" onClick={setClickMypage}>
                  <Button className="headerBtn">마이페이지</Button>
                </Link>
              ) : (
                <Button className="headerBtn" onClick={setSignOutModal}>
                  회원 탈퇴
                </Button>
              )}
            </Btndiv>
          </RightContainer>
        </HeadDiv>
      )}
    </>
  );
};

export default Header;
