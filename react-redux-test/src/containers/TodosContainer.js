import { useCallback } from "react";
import { connect } from "react-redux";
import Todos from "../components/Todos";
import todos, { changeInput, remove, toggle, insert } from "../modules/todos";
import { useSelector, useDispatch } from "react-redux";

const TodosContainer = () => {
    const { input, todos } = useSelector(({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }));

    const dispatch = useDispatch();
    const onChangeInput = useCallback(
        (input) => dispatch(changeInput(input)),
        [dispatch],
    );
    const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
    const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
    const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default TodosContainer;

// 밑의 방식은 useStore 사용전.
// const TodosContainer = ({
//     input,
//     todos,
//     changeInput,
//     insert,
//     toggle,
//     remove,
// }) => {
//     // console.log("컨테이너 props input: " + input);
//     // console.log("컨테이너 props todos: " + todos);
//     return (
//         <Todos
//             input={input}
//             todos={todos}
//             onChangeInput={changeInput}
//             onInsert={insert}
//             onToggle={toggle}
//             onRemove={remove}
//         />
//     );
// };

// export default connect(
//     ({ todos }) =>
//         // console.log(todos.todos),
//         ({
//             input: todos.input,
//             todos: todos.todos,
//         }),
//     {
//         changeInput,
//         insert,
//         toggle,
//         remove,
//     },
// )(TodosContainer);
