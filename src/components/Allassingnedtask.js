import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../styles/allmytask.css";

export const AllAssignedTask = () => {
  const [allassignedtasks, setAllAssignedTasks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/allassignedtask", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
      })
      .then((res) => {
        setAllAssignedTasks(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <div>
      <h3>All Assigned Task</h3>

      {allassignedtasks.map((assignedtask) => {
        return (
          <div className="allmytask" key={assignedtask._id}>
            <p className="smalltitle">From :</p>
            <p class="strong">{assignedtask.username}</p>
            <br />
            <p className="smalltitle">Task: </p>
            <p className="strong">{assignedtask.assigntask}</p>
            <br />

            <p className="smalltitle">State: </p>
            <select className="select" value={assignedtask.state} readOnly>
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
              className="editbutton"
              to={{
                pathname: "/updateassigntask",
                state: { assigntask: assignedtask },
              }}>
              Update
            </Link>
          </div>
        );
      })}
    </div>
  );
};
