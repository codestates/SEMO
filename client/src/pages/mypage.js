
import styled from "styled-components";
import Header from "../components/header";
import MyAnswer from "../components/myanswer";
import Myprofile from "../components/myprofile";
import Myquestion from "../components/myquestion";

const Mypage = () => {
    return (
    <> 
      <Header></Header>
      <Myprofile></Myprofile>
      <Myquestion></Myquestion>
      <MyAnswer></MyAnswer>
      <div>FOOTER</div>
    </>
    );
};
export default Mypage;
