import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import WelcomePage from "./pages/landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
