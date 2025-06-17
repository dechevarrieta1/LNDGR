import {z} from 'zod';

const loginSchema = z.object({
    email: z
    .string()
    .min(1, { message: 'El correo es obligatorio' })
    .email({message: 'El correo debe ser un correo electrónico válido' }),

    password: z
    .string()
    .min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres',}),
});

export type LoginSchema = z.infer<typeof loginSchema>;