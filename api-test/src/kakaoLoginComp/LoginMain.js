import styled from "styled-components";

const LoginForm = styled.a`
    text-decoration-line: none;
    display: flex;
    background-color: yellow;
    font-weight: 700;
    font-size: 2rem;
    margin: 0px auto;
    width: 200px;
    height: 200px;
`;

function LoginMain() {
    const REST_API_KEY = "0d71ff0f850ca0581c7446ab77550918";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <LoginForm href={KAKAO_AUTH_URL}>
            Kakao Login
            {console.log(`auth_url: ${KAKAO_AUTH_URL}`)}
        </LoginForm>
    );
}
export default LoginMain;
