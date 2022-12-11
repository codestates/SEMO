const CLIENT_ID = "80d37ab8b606a30f1f9a301818c6a4be";
const REDIRECT_URI =
  "http://semo.s3-website.ap-northeast-2.amazonaws.com/oauth/callback/kakao";

// 프런트엔드 리다이랙트 URI 예시입니다.
// const REDIRECT_URI =  "http://52.78.130.4:3000/oauth/callback/kakao";

// 백엔드 리다이랙트 URI 예시입니다.
// const REDIRECT_URI =  "http://52.78.130.4:5000/kakao/code";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
