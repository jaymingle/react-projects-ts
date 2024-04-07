import React from 'react';
import CreateTodo from "./CreateTodo.tsx";
import TodoLists from "./TodoLists.tsx";

const TODO_LISTS = [
    {id: 1, todo: 'Cook', isDone: false},
    {id: 2, todo: 'Clean My Room', isDone: false},
    {id: 3, todo: 'Go Grocery Shopping', isDone: false},
]

const TodoContainer: React.FC = () => {
    return (
        <div>
            <CreateTodo/>
            <TodoLists/>
        </div>
    );
};

export default TodoContainer;