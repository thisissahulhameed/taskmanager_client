import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import axios from "axios";

export const UpdateAssignTask = () => {
  let history = useHistory();
  const  Location = useLocation();
  const { assigntask } = Location.state;
  const [task, setTask] = useState(assigntask.assigntask);
  const [state, setState] = useState(assigntask.state);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:9000/updateassigntask/${assigntask._id}`,
        { assigntask: task, state: state },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        history.push("/assignedtask");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="formcontainer">
      <form onSubmit={handleUpdate}>
        <textarea className='textarea' value={task} onChange={(e) => setTask(e.target.value)} />
        <select className="select" value={state} onChange={(e) => setState(e.target.value)}>
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        <button className="editbutton">Update</button>
      </form>
    </div>
  );
};
