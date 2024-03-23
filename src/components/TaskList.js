import React, { useCallback, useEffect, useReducer, useState } from "react";

//styles
import "./TaskList.css";
import AddForm from "./AddForm";

export default function TaskList() {
  //state /json endpoint route
  const [url, setUrl] = useState("http://localhost:3000/todos");
  const [tasks, setTask] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [someState, setSomeState] = useState(false);

  const fetchData = useCallback(async () => {
    const res = await fetch(url);
    //console.log(res)
    const json = await res.json();
    setTask(json);
    console.log(tasks);
  }, [url]);

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      setError(err);
      console.log(error);
    }
  }, [fetchData]);

  console.log(tasks);

  const handleChange = (e) => {
    console.log(e.target.getAttribute("id"));
  };

  //test

  return (
    <div>
      <h1 className="title-header">To Do List</h1>
      {tasks &&
        tasks.map((task) => (
          <div className="list" key={task.id}>
            <h2>
              {task.finished ? (
                <div>
                  {task.id} - <del>{task.title}</del>
                  <input type="checkbox" checked></input>
                </div>
              ) : (
                <div>
                  <span className="task-id">{task.id}</span> - {task.title}
                  <input
                    id={task.id}
                    type="checkbox"
                    onChange={handleChange}
                  ></input>
                </div>
              )}
            </h2>
          </div>
        ))}
      <AddForm fetch={fetchData} />
    </div>
  );
}
