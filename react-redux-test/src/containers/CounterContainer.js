import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// #1
// mapStateToProps는 state를 파라미터로 받아오며, 이 값은 현재 스토어가 지니고 있는 상태를 가리킨다.
const mapStateToProps = (state) => ({
    number: state.counter.number,
});

// mapDispatchToProps는 store의 내장함수 dispatch를 파라미터로 받아온다.
const mapDispatchToProps = (dispatch) => ({
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    },
});

// mapStateToProps, mapDispatchToProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다.
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
// ~#1, #1의 내용들을 아래와 같이 고칠수 있다.
// export default connect(
//     (state) => ({ number: state.counter.number }),
//     (dispatch) => ({
//         increase: () => {
//             dispatch(increase());
//         },
//         decrease: () => {
//             dispatch(decrease());
//         },
//     }),
// )(CounterContainer);

// mapDispatchToProps 파라미터에 함수 형태가 아닌 액션 생성 함수로 넣어주면 더 간편하다.
export default connect(
    (state) => ({ number: state.counter.number }), //
    {
        increase,
        decrease,
    },
)(CounterContainer);

// 이 컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용해야 한다.

// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
// mapStateToProps는 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수,
// mapDispatchToProps는 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수.

// connect함수를 호출하면 함수를 반환한다. 이 함수에 컴포넌트를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어진다.
