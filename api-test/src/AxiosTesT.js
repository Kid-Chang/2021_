import axios from "axios";
import { useEffect } from "react";
import qs from "qs";

function AxiosTesT() {
    const REST_API_KEY = "0d71ff0f850ca0581c7446ab77550918";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const CLIENT_SECRET = "aBLnapi4bhpce4OWN1cZgyrLfv68WdcU";
    const code = new URL(window.location.href).searchParams.get("code");

    const QSpayload = qs.stringify({
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: code,
        client_secret: CLIENT_SECRET,
    });
    const JSONpayload = JSON.stringify({
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: code,
        client_secret: CLIENT_SECRET,
    });

    // const axiousTest = async () => {
    //     await axios
    //         .post("http://localhost:5000/todos", {
    //             id: 6,
    //             content: "hello",
    //             completed: false,
    //         })
    //         .then(console.log);
    // };
    useEffect(() => {
        // axiousTest();
        console.log(code);
        console.log(QSpayload);
        // grant_type=authorization_code&client_id=0d71ff0f850ca0581c7446ab77550918&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth%2Fkakao%2Fcallback&code=&client_secret=aBLnapi4bhpce4OWN1cZgyrLfv68WdcU

        console.log(JSONpayload);
        //{"grant_type":"authorization_code","client_id":"0d71ff0f850ca0581c7446ab77550918","redirect_uri":"http://localhost:3000/oauth/kakao/callback","code":null,"client_secret":"aBLnapi4bhpce4OWN1cZgyrLfv68WdcU"}
    }, []);
    return (
        <div>
            <div>test</div>
        </div>
    );
}
export default AxiosTesT;
