import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout, WelcomBudgetPage } from "./components";
import {
  Budgets,
  Categories,
  Dashboard,
  Expenses,
  Landing,
  Register,
} from "./pages";
import Login from "./pages/Login";
import GuestRoute from "./routes/GuestRoute";
import EmptyCategoryPage from "./components/features/categories/EmptyCategoryPage";

function App() {
  return (
    <Routes>
      {/* gutest routes */}
      <Route element={<GuestRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcom" element={<Landing />} />
      </Route>

      {/* protected routes */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to={"dashboard"}/>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="categories" element={<Categories />} />
        <Route path="budgets" element={<WelcomBudgetPage />} />
      </Route>
    </Routes>
  );
}

export default App;
