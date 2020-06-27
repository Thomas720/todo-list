import React, { useState } from "react";

// import Header from "Header";
// import ToDoForm from "ToDoForm";
// import ToDoItem from "ToDoItem";
// import ToDoList from "ToDoList";

import { Container, Button, Form, FormInput } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function ToDo() {
  //   //Setup Our To-Do List
  const [toDoList, setToDoList] = useState([
    { text: "Reading Assignment" },
    { text: "Code Challenge" },
    { text: "Lab Assignment" },
  ]);

  const [value, setValue] = useState("");

  const handleSubmit = (mouseClick) => {
    mouseClick.preventDefault();
    addToDo(value);
    setValue("");
  };

  const addToDo = (text) => {
    const updatetedToDoList = [...toDoList, { text }];
    setToDoList(updatetedToDoList);
  };

  const handelDelete = (todo) => {
    const filteredDelete = toDoList.filter(
      (currentToDo) => currentToDo !== todo
    );
    setToDoList(filteredDelete);
  };

  //   //   //Set Up Our Input

  return (
    <Container>
        
      <h1 className="header">Thomas's ToDo List</h1>

      <Container ClassName="toDoList">
        {toDoList.map((todo, index) => (
          <div key={index}>
            <p>{todo.text}</p>
            <button onClick={() => handelDelete(todo)}>Delete</button>
          </div>
        ))}
      </Container>

      <Container ClassName="toDoInput">
        <Form onSubmit={handleSubmit}>
          <FormInput
            placeholder="Type here To-Do"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button>Add To-Do</Button>
        </Form>
      </Container>
    </Container>
  );
}

export default ToDo;
