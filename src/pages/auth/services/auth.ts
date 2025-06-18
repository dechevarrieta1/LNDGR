import api from '../../../infra/http/http';
import type { LoginSchema } from '../schemas/loginSchema';
import type { RegisterSchema } from '../schemas/registerSchema';

export const login = async (data: LoginSchema) => {
    const res = await api.post("/login", data);
    return res.data;
}

export const register = async (data: RegisterSchema) => {
  const res = await api.post("/register", data);
  return res.data;
};

export const authService = { login, register };