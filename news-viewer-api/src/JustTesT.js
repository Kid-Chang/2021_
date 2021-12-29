import { useReducer } from "react";

const reducer = (state, action) => {
    return {
        ...state, //
        [action.name]: action.value,
    };
};
function JustTesT() {
    const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });

    const { name, nickname } = state;

    const onChange = (e) => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />{" "}
                <input name="nickname" value={nickname} onChange={onChange} />{" "}
            </div>
            <div>
                name: {name}
                nickname:{nickname}
            </div>
        </div>
    );
}

export default JustTesT;
