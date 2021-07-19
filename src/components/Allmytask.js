import { useState, useEffect } from "react";
import axios from "axios";

import "../styles/allmytask.css";
import { Link } from "react-router-dom";

export const AllMyTask = () => {
  const [alltasks, setAllTasks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/allmytask", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
      })
      .then((res) => {
        setAllTasks(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <div>
      <h3>All My Task</h3>

      {alltasks.map((task) => {
        return (
          <div className="allmytask" key={task._id}>
            <p className="smalltitle">Task: </p>
            <p className="strong">{task.task}</p>
            <br />
            <p className="smalltitle">State: </p>
            <select className="select" value={task.state} readOnly>
              <option value="Todo" disabled>
                Todo
              </option>
              <option value="Doing" disabled>
                Doing
              </option>
              <option value="Done" disabled>
                Done
              </option>
            </select>
            <Link
              to={{ pathname: "/updatemytask", state: { mytask: task } }}
              className="editbutton">
              edit
            </Link>
          </div>
        );
      })}
    </div>
  );
};
