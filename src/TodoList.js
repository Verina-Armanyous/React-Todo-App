import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListIemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <>
            <ListItem>
              <ListIemText>{todo.task}</ListIemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
export default TodoList;
