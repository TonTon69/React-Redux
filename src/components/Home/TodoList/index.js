import "./TodoList.scss";

function TodoList(props) {
    const { todoList, activeId, onTodoClick } = props;

    const handleTodoClick = (todo) => {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    };

    return (
        <ul className="todoList">
            {todoList.map((todo) => (
                <li
                    key={todo.id}
                    className={todo.id === activeId ? "active" : ""}
                    onClick={() => handleTodoClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
