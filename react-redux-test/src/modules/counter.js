import { createAction, handleActions } from "redux-actions";

// 액션 타입정하기.
// 액션타입은 대문자, 문자열 내용은 '모듈 이름 / 액션 이름'으로.. 문자열 안에 모듈 이름을 넣음으로써, 나중에 프로젝트가 커졌을 때 액션 이름이 충돌되는 것을 방지.
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수 만들기.
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// redux-aciton을 사용하면 아래의 코드처럼 됨.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기상태 및 리듀서 함수 만들기
const initialState = {
    number: 0,
};

// 리듀서함수를 만들때 아래의 코드대신 handleActions를 이용하면 더 간편함.
// const counter = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREASE:
//             return { number: state.number + 1 };
//         case DECREASE:
//             return { number: state.number - 1 };
//         default:
//             return state;
//     }
// };

// handleActions 사용.
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState,
);

export default counter;
