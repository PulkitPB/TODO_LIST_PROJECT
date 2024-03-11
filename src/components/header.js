import React, { useState } from "react";
import AddTodo from "./AddTodo";

function Header({ addTodo, list_status, handleStatus }) {
  const [show, setshow] = useState(false);
  const handleaddtodo = () => setshow(true);
  function handleClose() {
    console.log("hello handleclose");
    setshow(false);
  }
  function handleChange() {
    var selectBox = document.getElementById("selectBox");
    console.log(selectBox.options);
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    handleStatus(list_status, selectedValue);
  }
  return (
    <>
      <div
        style={{
          textAlign: "center",
          color: "#646681",
          fontSize: "20px",
          padding: "30px",
          margin: "auto",
        }}
      >
        <h1>
          <b>TODO LIST</b>
        </h1>
      </div>
      <div
        style={{ margin: "auto", padding: "20px", width: "max(50vw,500px)" }}
      >
        <div style={{ position: "relative" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleaddtodo}
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              display: "inline-block",
              height: "45px",
            }}
          >
            <b>Add Task</b>
          </button>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            onChange={handleChange}
            id="selectBox"
            style={{
              width: "170px",
              position: "absolute",
              right: "0%",
              display: "inline-block",
              backgroundColor: "#cccdde",
            }}
          >
            <option value="0">All</option>
            <option value="1">Incomplete</option>
            <option value="2">Completed</option>
          </select>
        </div>
        <AddTodo show={show} handleClose={handleClose} addTodo={addTodo} />
      </div>
    </>
  );
}
export default Header;
