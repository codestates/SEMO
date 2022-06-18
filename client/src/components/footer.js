import React from "react";
import minsoo from "../images/권민수.jpg";
import ikchan from "../images/권익찬.jpg";
import beomju from "../images/김범주.jpg";
import kyungmo from "../images/제경모.jpg";
import styled from "styled-components";
import SEMOLOGO from "../images/logo.png";

const FooterContainer = styled.footer`
  border: 1px solid gold;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #a573ff;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  font-size: 10px;
  color: white;
  text-align: center;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    font-size: 2.6vw;
  }

  @media screen and (min-width: 1001px) {
    font-size: 26px;
  }
`;

const SemoinfoContainer = styled.div`
  /* border: 10px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #ced4da;
  gap: 19px;
  font-size: 15px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    gap: 5vw;
    font-size: 4vw;
  }

  @media screen and (min-width: 1001px) {
    gap: 50px;
    font-size: 40px;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

const TeamContainer = styled.div`
  /* border: 11px solid skyblue; */
  display: flex;
  justify-content: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  width: 375px;
  padding: 4px 0;
  border-top: 2px solid #ced4da;
  border-bottom: 2px solid #ced4da;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 100vw;
    padding: 1vw 0;
  }

  @media screen and (min-width: 1001px) {
    width: 1000px;
    padding: 10px 0;
  }
`;

const ProfilePhoto = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileInfo = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 6px;

  @media screen and (max-width: 400px) {
    display: none;
  }

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    font-size: 1.6vw;
  }

  @media screen and (min-width: 1001px) {
    font-size: 16px;
  }
`;

const GithubIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  img {
    width: 50px;
    height: 50px;

    @media screen and (min-width: 401px) and (max-width: 1000px) {
      width: 13vw;
      height: 13vw;
    }

    @media screen and (min-width: 1001px) {
      width: 130px;
      height: 130px;
    }
  }

  .logo {
    border: 2px solid #7a57d1;
    border-radius: 20px;
    width: 50px;
    height: 50px;

    @media screen and (min-width: 401px) and (max-width: 1000px) {
      width: 13.3vw;
      height: 13.3vw;
    }

    @media screen and (min-width: 1001px) {
      width: 133px;
      height: 133px;
    }
  }
`;

const Imgbox = styled.img`
  /* border: 1px solid purple; */
  border-radius: 100%;
  width: 26px;
  height: 26px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 7vw;
    height: 7vw;
  }

  @media screen and (min-width: 1001px) {
    width: 70px;
    height: 70px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>Team FineCode</LogoContainer>
      <TeamContainer>
        <ProfileContainer>
          <ProfilePhoto>
            <a href="https://github.com/FineArtGo">
              <Imgbox src={minsoo} alt="team-leader" />
            </a>
            <ProfileInfo>
              <p>권민수 Front-End</p>
              <p>kwonys02@naver.com</p>
            </ProfileInfo>
          </ProfilePhoto>

          <ProfilePhoto>
            <a href="https://github.com/ikchan0625">
              <Imgbox src={ikchan} alt="team-member" />
            </a>
            <ProfileInfo>
              <p>권익찬 Front-End</p>
              <p>ikchan0625@gmail.com</p>
            </ProfileInfo>
          </ProfilePhoto>

          <ProfilePhoto>
            <a href="https://github.com/304HO">
              <Imgbox src={kyungmo} alt="team-member" />
            </a>
            <ProfileInfo>
              <p>제경모 Front-End</p>
              <p>lonnie4165@gmail.com</p>
            </ProfileInfo>
          </ProfilePhoto>

          <ProfilePhoto>
            <a href="https://github.com/bbammju">
              <Imgbox src={beomju} alt="team-member" />
            </a>
            <ProfileInfo>
              <p>김범주 Back-End</p>
              <p>stwinsilver2@gmail.com</p>
            </ProfileInfo>
          </ProfilePhoto>
        </ProfileContainer>
      </TeamContainer>
      <SemoinfoContainer>
        <a href="https://github.com/codestates/SEMO/projects/4">Dev-Log</a>
        <a href="https://www.figma.com/file/88jNhnNcal8eYj3vHkPJ3C/SEMO?node-id=360%3A976">
          ProtoType
        </a>
        <a href="https://github.com/codestates/Semo/wiki/System-Architecture">
          Architecture
        </a>
        <a href="https://github.com/codestates/Semo/wiki/DB-schema">DB</a>
      </SemoinfoContainer>

      <GithubIcon>
        <a href="https://github.com/codestates/SEMO/">
          <Imgbox className="logo" src={SEMOLOGO} alt="SEMOLOGO" />
        </a>
        <span>About Us</span>
      </GithubIcon>
    </FooterContainer>
  );
}

export default Footer;
