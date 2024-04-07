import React from 'react';
import CreateTodo from "./CreateTodo.tsx";
import TodoLists from "./TodoLists.tsx";

const TodoContainer: React.FC = () => {
    return (
        <div>
            I am the Container
            <CreateTodo/>
            <TodoLists/>
        </div>
    );
};

export default TodoContainer;