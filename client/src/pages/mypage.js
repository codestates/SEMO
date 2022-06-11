import Header from "../components/header";
import MyAnswer from "../components/myanswer";
import Myprofile from "../components/myprofile";
import Myquestion from "../components/myquestion";
import Footer from "../components/footer";
import Signoutmodal from "../modals/signoutmodal";
import { useStoreTemp } from "../zustand/store";
const Mypage = () => {
  const { signOutModal } = useStoreTemp();
  return (
    <>
      <Header></Header>
      <Myprofile></Myprofile>
      <Myquestion></Myquestion>
      <MyAnswer></MyAnswer>
      {signOutModal === true ? <Signoutmodal /> : null}
      <Footer />
    </>
  );
};
export default Mypage;
