import { useState, useEffect } from "react";
import axios from "axios";

import "../styles/allmytask.css";

export const AllAssignTask = () => {
  const [allassigntasks, setAllAssignTasks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/allassigntask", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
      })
      .then((res) => {
        setAllAssignTasks(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <div>
      <h3>All Assign Task</h3>

      {allassigntasks.map((assigntask) => {
        return (
          <div className="allmytask" key={assigntask._id}>
            <p className="smalltitle">To :</p>
            <p class="strong">{assigntask.assigneduser}</p>
            <br/>
            <p className="smalltitle">Task: </p>
            <p className="strong">{assigntask.assigntask}</p>
            <br />
            <p className="smalltitle">State: </p>
            <select className="select" value={assigntask.state} readOnly>
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
           
          </div>
        );
      })}
    </div>
  );
};
