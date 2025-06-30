import api from '../../../infra/http/http';
import type { LoginSchema } from '../schemas/loginSchema';
import type { RegisterSchema } from '../schemas/registerSchema';

export const login = async (data: LoginSchema) => {
    const res = await api.post("/v1/auth/users-login",{
      user:{
        email:data.email,
        password:data.password,
      }
    });
    return res.data;
}

export const register = async (data: RegisterSchema) => {
  const res = await api.post("/v1/auth/users-create",{
    user: {
      username: data.name,
      email: data.email,
      password: data.password,
      is_active: true,
    }
  });
  return res.data;
};

export const authService = { login, register };