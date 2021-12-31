import { connect } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, remove, toggle, insert } from "../modules/todos";

const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove,
}) => {
    console.log("컨테이너 props input: " + input);
    console.log("컨테이너 props todos: " + todos);
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

export default connect(
    ({ todos }) => (
        console.log(todos.todos),
        {
            input: todos.input,
            todos: todos.todos,
        }
    ),
    {
        changeInput,
        insert,
        toggle,
        remove,
    },
)(TodosContainer);
