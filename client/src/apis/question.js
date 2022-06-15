import axios from "axios";

export const getQuestionsData = () => {
  return axios.get("http://localhost:3500/question/all").then((response) => {
    let result = response.data.slice(-8);
    // console.log(result);
    return result;
  });
};
