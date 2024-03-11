import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function AddTodo({ show, handleClose, addTodo }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const handleAdd = (e) => {
    console.log("i am handleadd:%s %s", title, status);
    if (!title || !status) {
      alert("Enter a Title and status.");
    } else {
      addTodo(title, status);
      setTitle("");
      setStatus(0);
      handleClose();
    }
  };
  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
      }}
    >
      <div style={{ backgroundColor: "#ecedf6", borderRadius: "10px" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Add TODO</b>
          </Modal.Title>
        </Modal.Header>
        <form>
          <div
            className="mb-3"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title*
            </label>
            <input
              value={title}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="exampleInput" className="form-label">
              Status*
            </label>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              id="exampleInput"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option selected>None</option>
              <option value="1">Incomplete</option>
              <option value="2">Completed</option>
            </select>
          </div>
        </form>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleAdd();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
