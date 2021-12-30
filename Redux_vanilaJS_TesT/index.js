import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 이름 정의.
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 객체 만드는 액션 생성 함수. 반드시 type 값을 가져야 한다.
const toggleSwitch = () => ({
    type: TOGGLE_SWITCH,
});
const increase = (difference) => ({
    type: INCREASE,
    difference,
});
const decrease = () => ({
    type: DECREASE,
});

// 초깃값 설정.
const initialState = {
    toggle: false,
    counter: 0,
};

// 리듀서 함수 정의.
// 리듀서는 변화를 이르키는 함수이다. 파라미터로 state와 action값이 필요함.

function reducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle,
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
}

// 스토어 만들기.

const store = createStore(reducer);

// render 함수 만들기. 상태가 업데이트될 때마다 호출됨.
const render = () => {
    const state = store.getState();
    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add("active");
    } else {
        divToggle.classList.remove("active");
    }
    // 카운터 처리.
    counter.innerText = state.counter;
};
render();

// 구독기능 구현.(스토어 상태가 변경될때마다 호출, react-redux에선 필요 X)
store.subscribe(render);

divToggle.onclick = () => {
    console.log(store.getState());
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};
