import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <main className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Iniciar sesión</h1>
      <LoginForm />
    </main>
  );
}