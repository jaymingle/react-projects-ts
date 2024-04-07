import React, {Dispatch, SetStateAction} from 'react';
import TodoItem from "./TodoItem.tsx";
import Todo from "../../model.ts";

interface TodoProps {
    todoList: Todo[],
    setTodoLists: Dispatch<SetStateAction<Todo[]>>
}

const TodoLists: React.FC<TodoProps> = ({todoList, setTodoLists}) => {
    console.log(todoList, 'From Todo Lists');
    return (
        <div>
            {todoList.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    );
};

export default TodoLists;