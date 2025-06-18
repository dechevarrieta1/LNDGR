import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth";

export const useAuth = () =>{
    const loginMutation = useMutation({
        mutationFn: authService.login,
    });

    const registerMutation = useMutation({
        mutationFn: authService.register,
    })

    return{
        loginMutation,
        registerMutation,
    }
}