import React, {useState} from 'react';
import CreateTodo from "./CreateTodo.tsx";
import TodoLists from "./TodoLists.tsx";
import Todo from "../../model.ts";
import {Box, Checkbox, FormControlLabel} from "@mui/material";

const TODO_LISTS: Todo[] = [
    {id: 1, todo: 'Cook', completed: false},
    {id: 2, todo: 'Clean My Room', completed: false},
    {id: 3, todo: 'Go Grocery Shopping', completed: false},
]

const TodoContainer: React.FC = () => {

    const [filterCompleted, setFilterCompleted] = useState<boolean>(false)
    const [todoList, setTodoList] = useState<Todo[]>(TODO_LISTS);

    const filterCompletedHandler = () => {
        setFilterCompleted(value => !value)
    }

    console.log(filterCompleted)

    return (
        <div>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <FormControlLabel onChange={filterCompletedHandler} control={<Checkbox checked={filterCompleted} />} label="Completed Todo" />
            </Box>
            {filterCompleted && <p>The Filtered Has Been Done</p>}
            <CreateTodo setTodoList={setTodoList} />
            <TodoLists todoList={todoList} setTodoList={setTodoList}/>
        </div>
    );
};

export default TodoContainer;