import * as Icon from "react-icons/md";
import EditTodo from "./EditTodo";
import React, { useState, memo} from "react";

export default memo(function Todo({ x, onDelete, editTodo }) {
  const [show, setshow] = useState(false);
  const handleEdit = () => setshow(true);
  function handleClose() {
    console.log("hello handleclose");
    setshow(false);
  }
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingLeft: "10px",
        paddingTop: "10px",
        marginTop: "20px",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      {/* <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        style={{ width: "25px", height: "25px", display: "inline-block" }}
      /> */}
      <div style={{ display: "inline-block", paddingLeft: "10px" }}>
        <h6 style={{ margin: "0px" }}>{x.title}</h6>
        <h8 className="text-secondary" style={{ margin: "0px" }}>
          {x.time}
        </h8>
      </div>
      <div
        style={{ display: "inline-block", position: "absolute", right: "10px" }}
      >
        <button
          onClick={() => {
            onDelete(x);
          }}
          className="btn"
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "#eeeeee",
            borderRadius: "5px",
            padding: "2px",
            display: "inline-block",
          }}
        >
          <Icon.MdDelete
            className="icon_in_button"
            style={{ width: "25px", height: "25px", color: "black" }}
          />
        </button>
        <button
          onClick={handleEdit}
          className="btn"
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "#eeeeee",
            borderRadius: "5px",
            padding: "2px",
            display: "inline-block",
            marginLeft: "10px",
          }}
        >
          <Icon.MdEdit
            style={{ width: "25px", height: "25px", marginLeft: "2px" }}
          />
        </button>
      </div>
      <EditTodo todo={x} show={show} handleClose={handleClose} editTodo={editTodo}/>
    </div>
  );
});
