import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormRegister from "./components/FormRegister";
import FormLogin from "./components/FormLogin";
import DataUser from "./components/DataUser";

function App() {
  const [registeredUser, setRegisteredUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FormRegister setRegisteredUser={setRegisteredUser} />} />
          <Route
            path="/login"
            element={<FormLogin registeredUser={registeredUser} setLoggedInUser={setLoggedInUser} />}
          />
          <Route path="/usuario" element={<DataUser loggedInUser={loggedInUser} />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
