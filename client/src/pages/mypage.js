import Header from "../components/header";
import MyAnswer from "../components/myanswer";
import Myprofile from "../components/myprofile";
import Myquestion from "../components/myquestion";
import Footer from "../components/footer";

const Mypage = () => {
  return (
    <>
      <Header></Header>
      <Myprofile></Myprofile>
      <Myquestion></Myquestion>
      <MyAnswer></MyAnswer>
      <Footer />
    </>
  );
};
export default Mypage;
