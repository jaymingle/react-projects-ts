import TodoContainer from "./components/Todo/TodoContainer.tsx";
import {Box} from "@mui/material";

function App() {

  const style =  {
    backgroundColor: 'yellow',
    width: '70%',
    margin: 'auto',
    marginTop: '40px',
  }

  return (
    <Box style={style}>
        <TodoContainer/>
    </Box>
  )
}

export default App
