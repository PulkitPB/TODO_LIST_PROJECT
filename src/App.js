import "./App.css";
import Todo from "./components/Todo";
import Header from "./components/header";
// import * as Icon from 'react-bootstrap-icons';
import React, { useState, useEffect } from "react";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const [list_status, setListStatus] = useState("0");


  const editTodo = (sno1,title,status) =>{
    console.log("i am edit todo",sno1,title,status);
    for (let i=0;i<todos.length;i++){
      if(todos[i].sno===sno1){
        todos[i].title=title;
        todos[i].status=status;
        break;
      }
    }
    console.log(todos);
  }
  const onDelete = (todo) => {
    console.log("I am ondelete of todo");
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, status) => {
    console.log("I am adding this todo", title, status);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const d = new Date();
    let time1 = d.toDateString();
    const myTodo = {
      sno: sno,
      title: title,
      status: status,
      time: time1,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const handleStatus = (list_status, num) => {
    console.log("hello handleStatus");
    // console.log(list_status);
    // console.log(num);
    setListStatus(num);
  };

  return (
    <>
      <Header
        addTodo={addTodo}
        list_status={list_status}
        handleStatus={handleStatus}
      />

      <div
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "20px",
          paddingTop: "1px",
          backgroundColor: "#ecedf6",
          width: "max(50vw,500px)",
          borderRadius: "10px",
          margin: "auto",
        }}
      >
        {todos.length === 0 ? (
          <h3 style={{ textAlign: "center", padding: "20px" }}>No Todos</h3>
        ) : (
          todos.map((todo) => {
            if (todo.status === list_status || list_status === "0") {
              return <Todo x={todo} onDelete={onDelete} editTodo={editTodo}/>;
            }
          })
        )}
      </div>
    </>
  );
}

export default App;
