import axios from "axios";

export const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: `KakaoAK 0d71ff0f850ca0581c7446ab77550918`,
  },
});

// search book api
export const bookSearch = (params) => {
  return Kakao.get("/v3/search/book?target=title", { params });
};
