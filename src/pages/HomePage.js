import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, setActiveTodo } from "../actions/todo";
import TodoList from "../components/Home/TodoList";

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
    //connect redux store
    const todoList = useSelector((state) => state.todo.list);
    const activeId = useSelector((state) => state.todo.activeId);

    const dispatch = useDispatch();

    const handleAddTodo = () => {
        //random
        const newId = randomNumber();
        const newTodo = {
            id: newId,
            title: `Todo ${newId}`,
        };

        //dispatch action to redux store
        const action = addNewTodo(newTodo);
        dispatch(action);
    };

    const handleTodoClick = (todo) => {
        const action = setActiveTodo(todo);
        dispatch(action);
    };

    return (
        <div className="home-page">
            <h1>Redux hooks</h1>

            <button onClick={handleAddTodo}>Random todo</button>
            <TodoList
                todoList={todoList}
                activeId={activeId}
                onTodoClick={handleTodoClick}
            />
        </div>
    );
}

export default HomePage;
