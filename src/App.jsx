import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components";
import BudgetLimit from "./components/features/budgets/BudgetLimit";
import BudgetSpendingAnalisis from "./components/features/budgets/BudgetSpendingAnalysis";
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
import ProtectedRoute from "./routes/ProtectedRoute";

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
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="categories" element={<Categories />} />
          <Route path="budgets/" element={<Budgets />}>
            <Route index element={<Navigate to={"budget_limit"} />} />
            <Route path="budget_limit" element={<BudgetLimit />} />
            <Route
              path="spending_analisis"
              element={<BudgetSpendingAnalisis />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
