import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotesList from "./components/NotesList";
import Unauthorized from "./components/Unauthorized";



function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/signup" exact component={Signup}></Route>
      <Route path="/notes" exact component={NotesList} ></Route>
      <Route path="/unauthorized" exact component={Unauthorized}></Route>
    </Switch>
  );
}

export default App;