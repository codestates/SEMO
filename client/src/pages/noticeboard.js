import styled from "styled-components";
import Dropdown from "../components/dropdownmenu";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useStore, useScroll, useStoreTemp } from "../zustand/store";
import axios from "axios";
import Loading from "react-loading";
import { Link } from "react-router-dom";

const Noticeboard = () => {
  const [id, setId] = useState(1);
  const [data, setData] = useState([]); // 뿌려줘야할 데이터 누적 상태
  const [loading, setLoading] = useState(false); // 로딩 유무
  const [target, setTarget] = useState(null); // intersecting 이 일어나면 useEffect훅을 불러오기위한 state
  const { clickTitle, setClickTitle, setClickCreatedAt, ClickCreatedAt } =
    useStoreTemp();
  // 페이지 첫 마운트시 화면에 뿌려주는 useEffect
  useEffect(() => {
    const tempdata = async () => {
      const temp = await getQuestionsData();
      setData(temp);
      // console.log(temp);
      setLoading(false);
    };
    tempdata();
  }, []);

  const getQuestionsData = async () => {
    const good = await axios.get("http://52.78.130.4:3500/question/infinity");
    setId(good.data[7].id);
    return good.data;
  };

  const getMoreQuestionsData = () => {
    setLoading(true);
    console.log(id);
    setTimeout(() => {
      axios
        .post("http://52.78.130.4:3500/question/addinfinity", { id: id })
        .then((res) => {
          console.log(res);
          setData([...data, ...res.data]);
          // console.log("이건 함수가 실행될때 한번만 작동해야하는거야");
          setId(res.data[0].id);
        });
      setLoading(false);
    }, 700);
  };

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

  const click = (e) => {
    setClickTitle(e.title);
    setClickCreatedAt(e.createdAt);
  };

  const { school, grade, selectSchool, subject, selectGrade, selectsubject } =
    useStore();
  const searchHandler = (e) => {
    if (school !== "" && grade !== "" && subject !== "") {
      axios
        .post("http://52.78.130.4:3500/question/filter", {
          school,
          grade,
          subject,
        })
        .then((res) => {
          if (res.data.length === 0) {
            alert("일치하는 항목이 없습니다.");
          } else {
            setData(res.data);
            selectSchool("");
            selectGrade("");
            selectsubject("");
            return;
          }
        });
    } else {
      alert("모든 항목을 선택하셔야 합니다.");
    }
  };

  return (
    <>
      <Header />

      <Dropdown searchHandler={searchHandler} />
      <>
        <NoticeContainer>
          {data.map((el) => {
            return (
              <ItemContainer key={el.id} ref={setTarget}>
                <ImgContainer
                  src={el.image === null ? "img/githublogo.png" : el.image}
                  onError={(i) => (i.target.src = "img/githublogo.png")}
                  alt=""
                />
                <Link className="link" to="/viewquestion">
                  <ItemTexContainer
                    onClick={() => {
                      click(el);
                    }}
                  >
                    <p className="title">{el.title}</p>
                    <p className="nickname">{el.nickname}</p>
                  </ItemTexContainer>
                </Link>
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

const NoticeContainer = styled.div`
  /* border: 3px solid green; */
  max-width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 2vw 0;
  gap: 11px;
`;

const ItemContainer = styled.div`
  /* border: 1px solid yellow; */
  width: 159px;
  height: 159px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 3px 3px 3px 3px #999;

  .link {
    text-decoration: none;
  }
`;

const ImgContainer = styled.img`
  /* border: 1px solid red; */
  width: 124px;
  height: 124px;
  border-radius: 5vw;
`;

const ItemTexContainer = styled.div`
  /* border: 1px solid blue; */
  width: 159px;
  display: block;
  text-align: center;

  .title {
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .nickname {
    font-size: 13px;
  }
`;

const Loadingbox = styled.div`
  /* border: 1px solid red; */
  height: 10vw;
  width: 100vw;
  font-size: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
