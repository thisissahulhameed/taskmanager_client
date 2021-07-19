import { Link } from "react-router-dom";
import "../styles/navbarwithlink.css";

export const NavbarwithLink = () => {
  return (
    <div className="navbarwithlink">
      <strong className="header">Task Manager</strong>
      <div className="navlink">
        <Link className="link" to="/mytask">
          MyTask
        </Link>
        <Link className="link" to="/assigntask">
          AssignTask
        </Link>
        <Link className="link" to="/assignedtask">
          AssignedTask
        </Link>
      </div>
    </div>
  );
};
