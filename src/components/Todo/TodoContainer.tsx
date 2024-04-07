import React from 'react';
import CreateTodo from "./CreateTodo.tsx";
import TodoLists from "./TodoLists.tsx";

const TODO_LISTS = [
    {id: 1, todo: 'Cook', completed: false},
    {id: 2, todo: 'Clean My Room', completed: false},
    {id: 3, todo: 'Go Grocery Shopping', completed: false},
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