import React, { useState } from "react";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Clean", completed: false },
    { id: 2, task: "study", completed: false },
    { id: 3, task: "Walk my dog", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  // this is the return statement
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <ToolBar>
          <Typography color="inherit">My todoList</Typography>
        </ToolBar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  );
}
export default TodoApp;
