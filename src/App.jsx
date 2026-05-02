import { Route, Routes } from "react-router-dom";
import { Categories, Dashboard, Expenses, Landing, Register } from "./pages";
import GuestRoute from "./routes/GuestRoute";
import Login from "./pages/Login";
import { AppLayout } from "./components";

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
      <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/categories" element={<Categories />} />
      </Route>



    </Routes>
  );
}

export default App;
