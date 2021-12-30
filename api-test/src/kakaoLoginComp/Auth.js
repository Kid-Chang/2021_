import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

function Auth() {
    const REST_API_KEY = "0d71ff0f850ca0581c7446ab77550918";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    // const CLIENT_SECRET = "aBLnapi4bhpce4OWN1cZgyrLfv68WdcU";
    // calllback으로 받은 인가코드
    const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();

    const getToken = async () => {
        console.log(`code : ${code}`);
        console.log(`code inner : ${window.location.href}`);
        const payload = qs.stringify({
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            // client_secret: CLIENT_SECRET,
            code: code,
        });
        try {
            // access token 가져오기
            const res = await axios.post(
                "https://kauth.kakao.com/oauth/token",
                payload,
            );

            console.log(res);
            // Kakao Javascript SDK 초기화

            window.Kakao.init(REST_API_KEY);
            console.log(window.Kakao.isInitialized());
            // access token 설정
            window.Kakao.Auth.setAccessToken(res.data.access_token);

            navigate("/profile");
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getToken();
    }, []);
    return null;
}
export default Auth;
