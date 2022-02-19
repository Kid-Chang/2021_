import "./Logo.css";
import Title from "./Title";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div className="logo_a">
            <div className="logo_all">
                <div className="logo_t">
                    <img
                        class="lologo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                </div>
                <div className="sub">
                    <select
                        data-uia="language-ficker"
                        className="language"
                        id="lang-switch"
                        tabindex="0"
                        placeholder="lang-swit"
                    >
                        <option
                            selected
                            lang="ko"
                            value="/kr"
                            date-language="ko"
                            data-country="KR"
                        >
                            한국어
                        </option>
                        <option
                            selected
                            lang="en"
                            value="/en"
                            date-language="en"
                            data-country="KR"
                        >
                            English
                        </option>
                    </select>
                    <div className="login">
                        {/* <link to="/login"> */}
                        <button>로그인</button>
                        {/* </link> */}
                    </div>
                </div>
            </div>
            <Title />
        </div>
    );
}

export default Logo;
