import styled from "styled-components";
import Dropdown from "../components/dropdownmenu";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useScroll } from "../zustand/store";
import { getQuestionsData } from "../apis/question";
import axios from "axios";
import Loading from "react-loading";

const NoticeContainer = styled.div`
  box-sizing: border-box;
  /* border: 10px solid red; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2vw 0;
`;

const ItemContainer = styled.div`
  border: 1px solid blue;
  width: 42.5vw;
  height: 42.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.img`
  width: 33vw;
  height: 33vw;
  border-radius: 5vw;
`;

const ItemTexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Loadingbox = styled.div`
  border: 1px solid red;
  height: 10vw;
  width: 100vw;
  font-size: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Noticeboard = () => {
  const { items, preItems, setPreItems, setItems } = useScroll();
  const [data, setData] = useState([]); // 뿌려줘야할 데이터 누적 상태
  const [loading, setLoading] = useState(false); // 로딩 유무
  const [target, setTarget] = useState(null); // intersecting 이 일어나면 useEffect훅을 불러오기위한 state

  // 페이지 첫 마운트시 화면에 뿌려주는 useEffect
  useEffect(() => {
    const tempdata = async () => {
      const temp = await getQuestionsData();
      setData(temp);
      setLoading(false);
      // console.log("첫마운틑ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ");
    };
    tempdata();
  }, []);

  // 타겟에 변화가 있을때마다 실행시켜줄 useEffect에 observer 객체를 선언
  useEffect(() => {
    // 콜백함수 인자로 entry와 observer를 받는다, 타겟의 교차상태를 boolean값으로 반환하는
    // entry.isIntersecting이 true일때 추가적인 데이터를 더 받아와 누적후 뿌려준다
    // 8개 기본 2개씩 더뿌려줄 예정

    const callback = ([entry], observer) => {
      if (entry.isIntersecting) {
        getMoreQuestionsData();
        observer.observe(target);
      }
    };

    let observer;
    if (target) {
      observer = new IntersectionObserver(callback, { threshold: 0.5 });
      observer.observe(target);
      setLoading(true);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  const getMoreQuestionsData = () => {
    setLoading(true);
    setItems();
    setPreItems();
    // console.log("@@@@@@@@@@@@@", items, preItems);
    setTimeout(() => {
      axios.get("http://localhost:3500/question/all").then((res) => {
        setData([...res.data.slice(preItems, items), ...data]);
        // console.log("이건 함수가 실행될때 한번만 작동해야하는거야");
        // console.log(data);
      });
      setLoading(false);
    }, 700);
  };

  useEffect(() => {});

  return (
    <>
      <Header />
      <Dropdown />
      <>
        <NoticeContainer>
          {data
            .slice(0)
            .reverse()
            .map((el) => {
              return (
                <ItemContainer key={el.id} ref={setTarget}>
                  <ImgContainer
                    src={`img/${el.createdAt.slice(0, 19)}_.jpg`}
                    onError={(i) => (i.target.src = "img/githublogo.png")}
                    alt="sssss"
                  />
                  <ItemTexContainer>
                    <p>{el.title}</p>
                    <p>{el.nickname}</p>
                  </ItemTexContainer>
                </ItemContainer>
              );
            })}
        </NoticeContainer>
      </>
      <Loadingbox>
        {loading ? <Loading type="spokes" color="black" /> : ""}
      </Loadingbox>
      <Footer />
    </>
  );
};

export default Noticeboard;
