import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages";

function App() {
  return (
    <Routes>
      {/* gutest routes */}
      <Route path="/login" />
      <Route path="/register" />
      <Route path="/welcom" element={<Landing />} />

      {/* protected routes */}
    </Routes>
  );
}

export default App;
