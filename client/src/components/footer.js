import React from 'react'
import logo from '../images/logo.png'
import minsoo from '../images/권민수.jpg'
import ikchan from '../images/권익찬.jpg'
import beomju from '../images/김범주.jpg'
import kyungmo from '../images/제경모.jpg'
import styled from "styled-components"

const FooterContainer = styled.div`
  
  display: flex;
  left: 0;
  bottom: 0;
  height : 7rem;
  border-top: solid lightgrey;
  border-width: 2px;
`

const LogoContainer = styled.div`
    width: 20%;
    margin-left: 0;
    img {
        margin: 20px;
        width:  auto;
        height: 70%;
        border-right: 3px solid lightgrey;
        padding-right: 20%;
    }
`

const TeamContainer = styled.div`
    display: flex;
    width : 37rem;
    justify-content : center;
    align-items : center;
    
`


const ProfileContainer = styled.div`
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content : space-evenly;
    width: 150vw;
    margin-top: 0rem;
    img {
    width: 3rem;
    height: 3rem;
    }    
`

const ProfilePhoto = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0rem; 
    img {
      margin-top: 20px;
      border-radius: 100%;
    }
`

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content : center;
    
    & > p {
        margin: 0;
    }
    & > p span {
        font-size: 0.2rem;
        margin-left: 0.1rem;
    }
    & > span {
        font-size: 0.2rem;
        margin-left: 0.1rem;
    }
`


const Footer = () => {

  return (

    <FooterContainer>

      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>

      <TeamContainer>

        <ProfileContainer>
          <ProfilePhoto>
            <img src={minsoo} alt="team-leader"></img>
            <ProfileInfo>
              <p>
                <span>권민수 Full-Stack</span>
              </p>
              <span>kwonys02@naver.com</span>
            </ProfileInfo>
          </ProfilePhoto>

          <ProfilePhoto>
            <img src={ikchan} alt="team-member"></img>
            <ProfileInfo>
              <p>
                <span>권익찬 Front-End</span>
              </p>
              <span>ikchan0625@gmail.com</span>
            </ProfileInfo>
          </ProfilePhoto>

          <ProfilePhoto>
            <img src={kyungmo} alt="team-member"></img>
            <ProfileInfo>
              <p>
                <span>제경모 Front-end</span>
              </p>
              <span>lonnie4165@gmail.com</span>
            </ProfileInfo>
          </ProfilePhoto>

          <ProfilePhoto>
            <img src={beomju} alt="team-member"></img>
            <ProfileInfo>
              <p>
                <span>김범주 Back-End</span>
              </p>
              <span>stwinsilver2@gmail.com</span>
            </ProfileInfo>
          </ProfilePhoto>

        </ProfileContainer>

      </TeamContainer>

    </FooterContainer>

  )
}

export default Footer;