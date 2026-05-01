import { Route, Routes } from "react-router-dom";
import { Landing, Register } from "./pages";
import GuestRoute from "./routes/GuestRoute";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      {/* gutest routes */}

      <Route element={<GuestRoute />}>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/welcom" element={<Landing />} />
      </Route>

      {/* protected routes */}
    </Routes>
  );
}

export default App;
