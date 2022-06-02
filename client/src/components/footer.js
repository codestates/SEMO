import React from 'react'
import logo from '../images/logo.png'
import minsoo from '../images/권민수.jpg'
import ikchan from '../images/권익찬.jpg'
import beomju from '../images/김범주.jpg'
import kyungmo from '../images/제경모.jpg'
import styled from "styled-components"
import githubIcon from '../images/githublogo.png'


const SemoinfoContainer = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content : center;
    
    border-bottom: 2px solid #CED4DA;
    
    
`
const Semoinfo = styled.div`
    display: flex;
    align-items: center;
    justify-content : space-evenly;
    font-size: 1.5rem;
    margin-left: 5rem;
    margin-right: 5rem;
    a{
      text-decoration: none;
      color : #FFFFFF;
    }
    `


const FooterContainer = styled.footer`
    width: 100vw;
    background-color : #2E3447;
    padding-top : 2rem;
    padding-bottom : 1rem;
    height : auto;
`
const LogoContainer = styled.div`
    width: 100%;
    font-size : 2rem;
    text-align : center;
    margin: 0 auto;
    text-align: center;
    color: white;
    img {
        width: auto;
        height: 2rem;
    }
    
`
const TeamContainer = styled.div`
    display: flex;
    width : 100%;
    justify-content : center;
    align-items : center;
`


const ProfileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content : space-evenly;
    color : white;
    width: 100vw;
    margin-top: 2rem;
    border-top: 2px solid #CED4DA;
    padding-bottom: 2rem;
    border-bottom: 2px solid #CED4DA;
    img {
    width: 4rem;
    height: 4rem;
    }
    
`

const ProfilePhoto = styled.div`
    display: flex;
    align-items: center;
    justify-content : center;
    img {
      margin-top: 20px;
      border-radius: 100%;
    }
`

const ProfileInfo = styled.div`
    
    display: flex;
    padding-top: 1rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content : center;
    
    & > p {
        margin: 0;
    }
    & > p span {
        font-size: 1rem;
        margin-left: 0.5rem;
    }
    & > span {
        font-size: 0.8rem;
        margin-left: 0.5rem;
    }
`

const GithubIcon = styled.div`
width : 100%;
display : flex;
margin-top: 1rem;
justify-content : center;
align-items : center;
color : white;
img{
    width : 5rem;
    height : 5rem;
}

`


function Footer() {

  return (
    <FooterContainer>
      <LogoContainer>
        Team FineCode

      </LogoContainer>
      <TeamContainer>
        <ProfileContainer>

          <ProfilePhoto>
            <a href="https://github.com/FineArtGo" >
              <img src={minsoo} alt="team-leader"></img>
            </a>
            <ProfileInfo>
              <p>
                <span>권민수 Full-Stack</span>
              </p>
              <span>kwonys02@naver.com</span>
            </ProfileInfo>
          </ProfilePhoto>

          <ProfilePhoto>
            <a href="https://github.com/ikchan0625">
              <img src={ikchan} alt="team-member"></img>
            </a>
            <ProfileInfo>
              <p>
                <span>권익찬 Front-End</span>
              </p>
              <span>ikchan0625@gmail.comm</span>
            </ProfileInfo>
          </ProfilePhoto>

          <ProfilePhoto>
            <a href="https://github.com/304HO">
              <img src={kyungmo} alt="team-member"></img>
            </a>
            <ProfileInfo>
              <p>
                <span>제경모 Front-End</span>
              </p>
              <span>lonnie4165@gmail.com</span>
            </ProfileInfo>
          </ProfilePhoto>

          <ProfilePhoto>
            <a href="https://github.com/bbammju">
              <img src={beomju} alt="team-member"></img>
            </a>
            <ProfileInfo>
              <p>
                <span>김범주 Back-End</span>
              </p>
              <span>stwinsilver2@gmail.com</span>
            </ProfileInfo>
          </ProfilePhoto>
        </ProfileContainer>
      </TeamContainer>
      <SemoinfoContainer>
        <Semoinfo><a href="https://github.com/codestates/SEMO/projects/4" >Dev-Log</a></Semoinfo>
        <Semoinfo><a href="https://www.figma.com/file/88jNhnNcal8eYj3vHkPJ3C/SEMO?node-id=360%3A976">ProtoType</a></Semoinfo>
        <Semoinfo><a href="https://github.com/codestates/Semo/wiki/System-Architecture">Architecture</a></Semoinfo>
        <Semoinfo><a href="https://github.com/codestates/Semo/wiki/DB-schema">DB</a></Semoinfo>
      </SemoinfoContainer>

      <GithubIcon>
        <a href="https://github.com/codestates/SEMO/">
          <img src={githubIcon} alt="github-icon" />
        </a>
        <span>About Us</span>
      </GithubIcon>
    </FooterContainer>
  )
}

export default Footer;