import {Form, useForm} from 'react-hook-form';
import { useAuth} from '../hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/loginSchema';
import type { LoginSchema } from '../schemas/loginSchema';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form';
import { Button } from '../../../components/ui/button';
import { Input } from "../../../components/ui/input"


export default function LoginForm() {

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: 'pepito@gmail.com',
            password: '',
        },
    })
    const { loginMutation } = useAuth();
    const onSubmit = (values: LoginSchema) => {
        loginMutation.mutate(values)
    }

    return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl><Input type="password" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={loginMutation.isPending}>
          Iniciar sesión
        </Button>
      </form>
    </Form>
  );

}