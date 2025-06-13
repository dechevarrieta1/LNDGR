// import { showToast } from "@/utils/toastify";
import { Navigate, Outlet } from "react-router";

interface ProtectedAdminRoutesGroup {
  isAuthenticated: boolean;
}
export const ProtectedAdminRoutes = ({
  isAuthenticated,
}: ProtectedAdminRoutesGroup) => {
  if (!isAuthenticated) {
    // showToast(
    //   "error",
    //   "Ingreso",
    //   "No tienes permisos para acceder a esta ruta"
    // );
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
