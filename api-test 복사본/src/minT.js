import React from "react";
import "./minT.css";
import Logo from "./Logo";
import Title from "./Title";

function MinT() {
    return (
        <div className="app">
            <div className="backgrounds">
                <img
                    className="background"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/20876cab-b49d-4957-bbaf-906ceb1c05f1/ecc68814-1011-4ec3-9b69-6bff6dfbc561/KR-ko-20220117-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    srcset="https://assets.nflxext.com/ffe/siteui/vlv3/20876cab-b49d-4957-bbaf-906ceb1c05f1/ecc68814-1011-4ec3-9b69-6bff6dfbc561/KR-ko-20220117-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/20876cab-b49d-4957-bbaf-906ceb1c05f1/ecc68814-1011-4ec3-9b69-6bff6dfbc561/KR-ko-20220117-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/20876cab-b49d-4957-bbaf-906ceb1c05f1/ecc68814-1011-4ec3-9b69-6bff6dfbc561/KR-ko-20220117-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
                    alt=""
                />
            </div>
            <div className="container">
                <div className="tv_0">
                    <div className="tv_1">TV로 즐기세요.</div>
                    <div className="tv_2">
                        스마트 TV, PlayStation, Xbox, Chromecast, Apple TV,
                        블루레이 플레이어 등 다양한 디바이스에서 시청하세요.
                    </div>
                </div>
                <img
                    className="tv"
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                    alt=""
                />
            </div>
            <div className="container1">
                <img
                    className="story"
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                    alt=""
                />
                <div className="story_0">
                    <div className="story_1">
                        즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.
                    </div>
                    <div className="story_2">
                        간편하게 저장하고 빈틈없이 즐겨보세요.
                    </div>
                </div>
            </div>
            <div class="container2">
                <div className="moniter_0">
                    <div className="moniter_1">
                        다양한 디바이스에서 시청하세요.
                    </div>
                    <div className="moniter_2">
                        각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서
                        무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.
                    </div>
                </div>
                <img
                    className="moniter"
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                    alt=""
                />
            </div>
            <div class="container3">
                <img
                    className="kids"
                    src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABTyynLTvOBU46RmBnCIPyjAryrXCZKImpoXdp7Mz54jVGKnBQ1X84bzR-3vtD-RA4uu2b1FjrDgfxE6KElG14WAXW19X.png?r=acf"
                    alt=""
                />
                <div className="kids_0">
                    <div className="kids_1">
                        어린이 전용 프로필을 만들어 보세요.
                    </div>
                    <div className="kids_2">
                        자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험.
                        자녀에게 이 특별한 경험을 선물하세요. 넷플릭스
                        회원이라면 무료입니다.
                    </div>
                </div>
            </div>
            <div className="que">
                <div className="que_all">
                    <div className="que_0">자주 묻는 질문</div>
                    <div className="que_1">
                        <button>넷플릭스란 무엇인가요?</button>
                    </div>
                    <div className="que_1">
                        <button>넷플릭스 요금은 얼마인가요?</button>
                    </div>
                    <div className="que_1">
                        <button>어디에서 시청할 수 있나요?</button>
                    </div>
                    <div className="que_1">
                        <button>멤버십을 해지하려면 어떻게 하나요?</button>
                    </div>
                    <div className="que_1">
                        <button>
                            넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?
                        </button>
                    </div>
                    <div className="que_1">
                        <button>아이들이 넷플릭스를 봐도 좋을까요?</button>
                    </div>
                    <div className="email_i">
                        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면
                        이메일 주소를 입력하세요.
                    </div>
                    <div className="email_0">
                        <input
                            type="text"
                            name="email_0"
                            id="email_0"
                            autocomplete="off1"
                            required
                        ></input>
                        <label for="email_0">이메일 주소</label>
                        <button>시작하기</button>
                    </div>
                </div>
            </div>
            <div className="last"></div>
            <Logo />
            {/* <Title /> */}
        </div>
    );
}

export default MinT;
