import { Fragment } from "react";
import styled from "styled-components"
import logo from "../images/logo.png"
import Button_component from "../components/button.js"

const HeadDiv = styled.div`
box-sizing: border-box;
margin: 0;
display: flex;
justify-content: space-between;
padding : 0 7px 0 0 
`

//position:relative; 
//left: -30px;
const Logoimage  =styled.img.attrs({
    src: `${logo}`
  })`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 88px;
height: 71px;

`;
const Btndiv =styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 10px;

margin-top: auto;


`




const Header = ()=> { 
    return (
        <HeadDiv>
          
               <Logoimage/>
            
           
            <Btndiv> 
                <Button_component>로그인</Button_component>
                <Button_component>회원가입</Button_component>
            </Btndiv>
          

        </HeadDiv>
      )
}


export default Header
