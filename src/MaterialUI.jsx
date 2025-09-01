import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from '@mui/material/Alert';

function App() {
  let handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <>
      <h1>Welcome to Mini Project</h1>
      <Button variant="contained" onClick={handleClick}>
        Click Me!
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="contained" onClick={handleClick} color="success">
        Click Me 2!
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="contained" onClick={handleClick} color="error">
        Click Me 3!
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      &nbsp;&nbsp;&nbsp;
      <br /><br />
      <Alert severity="error">This is an error Alert.</Alert>
    </>
  );
}

export default App;
