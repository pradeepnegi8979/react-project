import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Todo() {
  const [todolist, setTodolist] = useState([]);

  const saveTodoList = (event) => {
    event.preventDefault();
    const toname = event.target.elements.toname.value.trim().toLowerCase();

    if (
      toname !== "" &&
      !todolist.some((item) => item.toLowerCase() === toname)
    ) {
      const finalDolist = [...todolist, toname];
      setTodolist(finalDolist);
      event.target.reset();
    } else if (toname === "") {
      alert("Please enter a valid item");
    } else {
      alert("Item already exists");
    }
  };

  const deleteRow = (index) => {
    const finalData = todolist.filter((_, i) => i !== index);
    setTodolist(finalData);
  };

  const list = todolist.map((value, index) => (
    <ToDoListItems
      key={index}
      value={value}
      indexNumber={index}
      deleteRow={() => deleteRow(index)}
    />
  ));

  return (
    <section className="todoList">
      <Container>
        <Row>
          <Col lg="12">
            <h2>Todo List</h2>
            <form onSubmit={saveTodoList}>
              <div className="todoAdd">
                <input type="text" name="toname" />
                <button type="submit">Save</button>
              </div>
            </form>
          </Col>
          <Col lg="12" className="outerDiv">
            <ul>{list}</ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function ToDoListItems({ value, deleteRow, indexNumber }) {
  const [status, setStatus] = useState(false);
  const checkStatus = () => {
    setStatus(!status);
  };
  return (
    <li className={status ? "completetodo" : ""} onClick={checkStatus}>
      {indexNumber + 1}
      {``} {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}

export { Todo };
