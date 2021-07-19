import axios from "axios";
import { useState } from "react";

import "../styles/form.css";
import { AllMyTask } from "./Allmytask";

export const MyTask = () => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:9000/createmytask",
        {
          task: task,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        window.location.reload()
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="formcontainer">
      <form onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          placeholder="create your own task"
          type="text"
          required
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit" className="button">Create Task</button>
        <AllMyTask />
      </form>
    </div>
  );
};
