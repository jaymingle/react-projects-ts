import React, {useState} from 'react';
import CreateTodo from "./CreateTodo.tsx";
import TodoLists from "./TodoLists.tsx";
import Todo from "../../model.ts";

const TODO_LISTS: Todo[] = [
    {id: 1, todo: 'Cook', completed: false},
    {id: 2, todo: 'Clean My Room', completed: false},
    {id: 3, todo: 'Go Grocery Shopping', completed: false},
]

const TodoContainer: React.FC = () => {

    const [todoList, setTodoList] = useState<Todo[]>(TODO_LISTS);
    return (
        <div>
            <CreateTodo setTodoList={setTodoList} />
            <TodoLists todoList={todoList} setTodoList={setTodoList}/>
        </div>
    );
};

export default TodoContainer;