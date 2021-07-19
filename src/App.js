import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { MyTask } from "./components/Mytask";
import { Register } from "./components/Register";
import { AssignTask } from "./components/Assigntask";
import { Navbar } from "./components/Navbar";
import { NavbarwithLink } from "./components/NavbarwithLink";
import { UpdateTask } from "./components/Updatemytask";
import { UpdateAssignTask } from "./components/Updateassigntask";
import { AllAssignedTask } from "./components/Allassingnedtask";

function App() {
  return (
    <div className="App">
      <Router>
        {!localStorage.getItem("AccessToken") && <Navbar />}
        {localStorage.getItem("AccessToken") && <NavbarwithLink />}

        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mytask">
          <MyTask />
        </Route>
        <Route exact path="/assigntask">
          <AssignTask />
        </Route>
        <Route exact path="/assignedtask">
          <AllAssignedTask/>
        </Route>
        <Route exact path="/updatemytask">
          <UpdateTask />
        </Route>
        <Route exact path="/updateassigntask">
          <UpdateAssignTask />
        </Route>
      </Router>
    </div>
  );
}

export default App;
