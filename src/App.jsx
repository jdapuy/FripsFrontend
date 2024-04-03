import "./App.css";
import "./index.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GroupsContainer from "./components/GroupsContainer";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Home2 from "./components/Home2";
// import Home from "./components/Home";
// import NoPage from "./components/NoPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        Signin
        <Route path="/" element={<Home2 />} />
        <Route path="/groups" element={<GroupsContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="*" element={<NoPage />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
