import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Authenticate from "../components/Authenticate";
import CreatePatientProfile from "../components/CreatePatientProfile";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-patient" element={<CreatePatientProfile />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
