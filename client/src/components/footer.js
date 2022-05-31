import React from 'react'
import logo from '../images/logo.png'
import minsoo from '../images/minsoo.jpg'
import ikchan from '../images/ikchan.jpg'
import beomju from '../images/beomju.jpg'
import kyungmo from '../images/kyungmo.jpg'
import styled from "styled-components"


const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  width : 100vw;
  height : 15vw;
  background-color: white;
  border-top: solid lightgrey;
  border-width: 3px;
  
`

const LogoContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    /* border-right: 2px solid lightgrey; */
    img {
        margin: 40px;
        width:  65%;
        height: 65%;
        border-right: 3px solid lightgrey;
        padding-right: 30%;
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
    color : black;
    width: 80vw;
    margin-top: 0rem;
    img {
    width: 5rem;
    height: 5rem;
    }
    
`

const ProfilePhoto = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content : center;
    padding-top : 0rem; 

    img {
      border-radius: 100%;
    }
`

const ProfileInfo = styled.div`
  
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