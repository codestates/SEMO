const CLIENT_ID = "1d3ae3d7f704bfdf575aca7d042711fc";
const REDIRECT_URI = "http://localhost:3500/kakao/code";

// 프런트엔드 리다이랙트 URI 예시입니다.
// const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

// 백엔드 리다이랙트 URI 예시입니다.
// const REDIRECT_URI =  "http://localhost:5000/kakao/code";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
