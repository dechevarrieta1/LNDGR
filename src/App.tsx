import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import RegisterPage from "./pages/auth/register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
