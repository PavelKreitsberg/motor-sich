import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Home from "../../pages/Home.jsx";
import Team from "../../pages/Team.jsx";
import Partners from "../../pages/Partners.jsx";
import { AppContainer } from "./App.styled.jsx";
import Register from "../../pages/Register.jsx";
import Login from "../../pages/Login.jsx";

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
