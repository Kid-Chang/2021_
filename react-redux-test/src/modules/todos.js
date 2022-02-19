import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// 액션 타입정하기.
// 액션타입은 대문자, 문자열 내용은 '모듈 이름 / 액션 이름'으로.. 문자열 안에 모듈 이름을 넣음으로써, 나중에 프로젝트가 커졌을 때 액션 이름이 충돌되는 것을 방지.
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// 액션 생성 함수 만들기.
// export const changeInput = (input) => ({
//     type: CHANGE_INPUT,
//     input,
// });
// let id = 3;
// export const insert = (text) => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false,
//     },
// });
// export const toggle = (id) => ({
//     type: TOGGLE,
//     id,
// });
// export const remove = (id) => ({
//     type: REMOVE,
//     id,
// });
// 위의 코드 대신 redux-actions를 이용해 새롭게 정의.

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 4;
export const insert = createAction(INSERT, (text) => ({
    id: id++,
    text,
    done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// 초기상태 및 리듀서 함수 만들기
const initialState = {
    input: "a",
    todos: [
        {
            id: 1,
            text: "리덕스 기초 배우기",
            done: true,
        },
        {
            id: 2,
            text: "리액트와 리덕스 사용하기",
            done: false,
        },
        {
            id: 3,
            text: "리액트와 리덕스 사용하기",
            done: false,
        },
    ],
};

// 리듀서 함수 handleActions로 새롭게 만들기.
// const todos = (state = initialState, action) => {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input,
//             };
//         case INSERT:
//             return { ...state, todos: state.todos.concat(action.todo) };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo) =>
//                     todo.id === action.id
//                         ? { ...todo, done: !todo.done }
//                         : todo,
//                 ),
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter((todo) => todo.id !== action.id),
//             };
//         default:
//             return state;
//     }
// };

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, action) => ({
            ...state,
            input: action.payload,
        }),
        [INSERT]: (state, action) => ({
            ...state,
            todos: state.todos.concat(action.payload),
        }),
        [TOGGLE]: (state, action) => ({
            ...state,
            todos: state.todos.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo,
            ),
        }),
        [REMOVE]: (state, action) => ({
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload),
        }),
    },
    initialState,
);

// immer 이용.
// const todos = handleActions(
//     {
//         [CHANGE_INPUT]: (state, { payload: input }) =>
//             produce(state, (draft) => {
//                 draft.input = input;
//             }),
//         [INSERT]: (state, { payload: todo }) =>
//             produce(state, (draft) => {
//                 draft.todos.push(todo);
//             }),
//         [TOGGLE]: (state, { payload: id }) =>
//             produce(state, (draft) => {
//                 const todo = draft.todos.find((todo) => todo.id === id);
//                 todo.done = !todo.done;
//             }),
//         [REMOVE]: (state, { payload: id }) =>
//             produce(state, (draft) => {
//                 const index = draft.todos.findIndex((todo) => todo.id === id);
//                 draft.todos.splice(index, 1);
//             }),
//     },
//     initialState,
// );

export default todos;
