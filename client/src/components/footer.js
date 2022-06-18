import React from "react";
import logo from "../images/logo.png";
import minsoo from "../images/권민수.jpg";
import ikchan from "../images/권익찬.jpg";
import beomju from "../images/김범주.jpg";
import kyungmo from "../images/제경모.jpg";
import styled from "styled-components";
import githubIcon from "../images/githublogo.png";

const SemoinfoContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #ced4da;
`;
const Semoinfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 4vw;
  gap: 5vw;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

const FooterContainer = styled.footer`
  width: 100vw;
  background-color: #2e3447;
  padding-top: 2rem;
  padding-bottom: 1rem;
  height: auto;
`;

const LogoContainer = styled.div`
  width: 100%;
  font-size: 2rem;
  text-align: center;
  margin: 0 auto;
  text-align: center;
  color: white;
  img {
    width: auto;
    height: 2rem;
  }
`;
const TeamContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  width: 100vw;
  padding: 1vw;
  border-top: 2px solid #ced4da;
  border-bottom: 2px solid #ced4da;
`;

const ProfilePhoto = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
`;

const ProfileInfo = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1vw;

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

const GithubIcon = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  color: white;
  img {
    width: 5rem;
    height: 5rem;
  }
`;

const Imgbox = styled.img`
  /* border: 1px solid purple; */
  border-radius: 100%;
  width: 7vw;
  height: 7vw;
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
        <Semoinfo>
          <a href="https://github.com/codestates/SEMO/projects/4">Dev-Log</a>
          <a href="https://www.figma.com/file/88jNhnNcal8eYj3vHkPJ3C/SEMO?node-id=360%3A976">
            ProtoType
          </a>
          <a href="https://github.com/codestates/Semo/wiki/System-Architecture">
            Architecture
          </a>
          <a href="https://github.com/codestates/Semo/wiki/DB-schema">DB</a>
        </Semoinfo>
      </SemoinfoContainer>

      <GithubIcon>
        <a href="https://github.com/codestates/SEMO/">
          <Imgbox src={githubIcon} alt="github-icon" />
        </a>
        <span>About Us</span>
      </GithubIcon>
    </FooterContainer>
  );
}

export default Footer;
