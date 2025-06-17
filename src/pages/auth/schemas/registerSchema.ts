import {z} from 'zod';

export const registerSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'El nombre es obligatorio' })
        .max(50, { message: 'El nombre no puede tener más de 50 caracteres' }),

    email: z
        .string()
        .min(1, { message: 'El correo es obligatorio' })
        .email({ message: 'El correo debe ser un correo electrónico válido' }),

    password: z
        .string()
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
        .max(100, { message: 'La contraseña no puede tener más de 100 caracteres' }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;