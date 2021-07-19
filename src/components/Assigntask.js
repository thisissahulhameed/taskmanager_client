import axios from "axios";
import { useEffect, useState } from "react";

import "../styles/form.css";
import "../styles/assigntask.css";
import { AllAssignTask } from "./Allassigntask";
import { useHistory } from "react-router";

export const AssignTask = () => {
  let history = useHistory()
  const [assigntask, setAssignTask] = useState("");
  const [assignedUser, setAssignedUser] = useState("");
  const [allusers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/allusers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
      })
      .then((users) => {
        setAllUsers(users.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    console.log(assignedUser, "ldsjf");
    e.preventDefault();
    axios
      .post(
        "http://localhost:9000/assigntask",
        {
          assigntask: assigntask,
          assigneduser: assignedUser,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
          },
        }
      )
      .then((res) => history.push('/assigntask'))
      .catch((err) => console.log(err));
  };
  return (
    <div className="formcontainer">
      <form onSubmit={handleSubmit}>
        
        <textarea
          className="textarea"
          placeholder="Assign task to your collegue"
          type="text"
          required
          value={assigntask}
          onChange={(e) => {
            setAssignTask(e.target.value);
          }}
        />
        <div className="assigntask">
          <select
            className="select"
            required
            
            onChange={(e) => {
               setAssignedUser(e.target.value);
            }}>
            {allusers.map((user) => {
              return (
                <option key={user._id} value={user.username}>
                  {user.username}
                </option>
              );
            })}
          </select>
          <button className="assignbutton" type="submit">
            Assign Task
          </button>
          <AllAssignTask/>
        </div>
      </form>
    </div>
  );
};
