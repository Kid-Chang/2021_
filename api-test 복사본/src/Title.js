// import React from "react";
import MinT from "./minT";
import "./Title.css";

function Title() {
    return (
        <div className="title">
            <div className="nav_big">영화와 시리즈를 무제한으로.</div>
            <div className="nav_mid">
                다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
            </div>
            <div className="nav_small">
                시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
                주소를 입력하세요.
            </div>
            <div className="email-write">
                <input
                    type="text"
                    name="email"
                    id="email"
                    autocomplete="off"
                    required
                ></input>
                <label for="email">이메일 주소</label>
                <button>시작하기</button>
            </div>
            {/* <MinT /> */}
        </div>
    );
}

export default Title;
