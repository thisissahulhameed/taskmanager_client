import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import axios from "axios";

export const UpdateTask = () => {
  let history = useHistory();
  const Location = useLocation();
  const { mytask } = Location.state;
  const [task, setTask] = useState(mytask.task);
  const [state, setState] = useState(mytask.state);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:9000/updatemytask/${mytask._id}`,
        { task: task, state: state },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        history.push("/mytask");
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:9000/deletemytask/${mytask._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        history.push("/mytask");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="formcontainer">
      <form onSubmit={handleUpdate}>
        <textarea
          className="textarea"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          className="select"
          value={state}
          onChange={(e) => setState(e.target.value)}>
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        <button className="updatebutton">Update</button>
        <button className="deletebutton" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};
