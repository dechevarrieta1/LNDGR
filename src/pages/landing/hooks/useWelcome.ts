import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { authService } from "@/services/auth";
import { getDictionary } from "../utils/functions";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { showToast } from "@/utils/toastify";

import { LoginFormDataType, UserType } from "../interfaces/login";
import { LoginUserBody } from "@/services/interfaces/auth";

const useLogin = () => {
  const language = useUiStore((state) => state.language);
  const dictionary = getDictionary(language).loginForm;

  const navigate = useNavigate();

  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const setAccesToken = useAuthStore((state) => state.setAccessToken);
  const setUser = useAuthStore((state) => state.setUser);

  const loginSchema = z.object({
    email: z.string().min(1, dictionary.errors.userRequired),
    password: z.string().min(1, dictionary.errors.passwordRequired),
  });

  const loginForm = useForm<LoginFormDataType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: ({ loginBody }: { loginBody: LoginUserBody }) =>
      authService.loginUser(loginBody),
    onSuccess: async (data) => {
      const userData = data.data.token;
      const user: UserType = jwtDecode(userData);
      setAccesToken(data.data.token);
      await setUser(user);

      setIsAuthenticated(true);
      navigate("/getting-started");
    },
    onError: () => {
      showToast("error", "Inicio de sesión", "Usuario o contraseña incorrecta");
    },
  });

  /**
   * Handles the submit of the login form
   * @param data The data of the form
   */
  const handleSubmitLogin = (data: LoginFormDataType) => {
    const loginBody: LoginUserBody = {
      email: data.email,
      password: data.password,
    };

    loginMutation.mutate({ loginBody });
  };

  return {
    /* States */
    loginForm,

    /* States Functions */

    /* Functions */
    handleSubmitLogin,
  };
};

export default useLogin;
