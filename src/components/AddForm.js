import React, { useState } from "react";
import "./AddForm.css";
import { useFetchPost } from "../hooks/useFetchPost";

export default function AddForm() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const { postData } = useFetchPost("http://localhost:3000/todos");

  const addTaskHandler = (e) => {
    e.preventDefault();
    postData({
      title: title,
      finished: false,
    });
    console.log(title, date);
  };

  return (
    <div>
      {showForm && (
        <form className="add-task" onSubmit={addTaskHandler}>
          <label>
            <span>Title:</span>
            <input
              type="text"
              className="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </label>{" "}
          <br />
          <label>
            <span>Start:</span>
            <input
              type="date"
              className="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              value={date}
            />
          </label>
          <br />
          <button>submit</button>
          <button
            onClick={() => {
              setShowForm(false);
            }}
          >
            Cancel
          </button>
        </form>
      )}
      <br />
      <button
        onClick={() => {
          setShowForm(true);
        }}
      >
        Add Task
      </button>
    </div>
  );
}
