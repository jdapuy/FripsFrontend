import "./App.css";
import "./index.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GroupsContainer from "./components/GroupsContainer";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Home from "./components/Home";
import GroupForm from "./components/GroupForm";
import ItinerariesContainer from "./components/ItinerariesContainer";
import Group from "./components/Group";
import ItineraryForm from "./components/ItineraryForm";
import CalendarComponent from "./components/CalendarComponent";
// import Home from "./components/Home";
// import NoPage from "./components/NoPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<GroupsContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/groupForm" element={<GroupForm />} />
        <Route path="/itineraries" element={<ItinerariesContainer />} />
        <Route path="/group/:groupId" element={<Group />} />
        <Route
          path="/group/:groupId/itineraryForm"
          element={<ItineraryForm />}
        />
        <Route
          path="/group/:groupId/calendar"
          element={<CalendarComponent />}
        />
        {/* <Route path="*" element={<NoPage />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
