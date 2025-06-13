"use client"

import { useState } from "react"

import { Users, Zap, Laugh, ArrowRight } from "lucide-react"
import { Button } from "../../components/ui/button"
import  { Card, CardContent } from "../../components/ui/card"

export default function WelcomePage() {
  const [currentView, setCurrentView] = useState<"welcome" | "menu" | "login" | "register">("welcome")

  if (currentView === "menu") {
    return <MenuView onBack={() => setCurrentView("welcome")} />
  }

  if (currentView === "login") {
    return <LoginView onBack={() => setCurrentView("welcome")} onRegister={() => setCurrentView("register")} />
  }

  if (currentView === "register") {
    return <RegisterView onBack={() => setCurrentView("welcome")} onLogin={() => setCurrentView("login")} />
  }

  return (
    <div className="">
      <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-200">
        <div className="text-3xl font-black">LPM!</div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-gray-300 text-black hover:bg-gray-50"
            onClick={() => setCurrentView("login")}
          >
            Iniciar Sesión
          </Button>
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
            onClick={() => setCurrentView("register")}
          >
            Registrarse
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-8xl md:text-9xl font-black mb-6 text-black">LPM!</h1>
          <p className="text-2xl mb-4 font-light text-gray-600">...y que sea lo que sea!</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            El juego de cartas más zarpado para tus juntadas. Combiná preguntas y respuestas para crear las situaciones
            más absurdas y divertidas.
          </p>
          <div className="bg-black text-white px-6 py-3 rounded-full inline-block mb-12 font-semibold">
            🔞 Solo para mayores de 18 años
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <Users className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
              <h3 className="text-xl font-bold mb-3">Para Juntadas</h3>
              <p className="text-gray-600">Perfecto para fiestas y reuniones con amigos. Sin reglas complejas.</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <Laugh className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
              <h3 className="text-xl font-bold mb-3">Humor Absurdo</h3>
              <p className="text-gray-600">Las peores combinaciones son las mejores. Humor negro y disparatado.</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <Zap className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
              <h3 className="text-xl font-bold mb-3">Fácil de Jugar</h3>
              <p className="text-gray-600">Lee una pregunta, responde con tus cartas. El más gracioso gana.</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-12 py-6 rounded-full"
            onClick={() => setCurrentView("menu")}
          >
            ¡Empezar a Jugar! <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-gray-500">
        <p>© 2024 LPM! - El juego más zarpado de Argentina</p>
      </footer>
    </div>
    </div>
  )
}

function MenuView({ onBack }: { onBack: () => void }) {
  const [roomCode, setRoomCode] = useState("")

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-6 flex justify-between items-center border-b border-gray-200">
        <Button variant="ghost" onClick={onBack} className="text-black hover:bg-gray-50">
          ← Volver
        </Button>
        <div className="text-3xl font-black">LPM!</div>
        <div className="w-20"></div>
      </header>

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-black text-center mb-16">¿Cómo querés jugar?</h1>

          <div className="space-y-6">
            {/* Create Room */}
            <Card className="border-gray-200 hover:shadow-lg transition-all cursor-pointer hover:border-yellow-400">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="bg-yellow-400 p-4 rounded-full">
                    <Users className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Crear Sala</h3>
                    <p className="text-gray-600">Crea una nueva sala y invita a tus amigos a jugar</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              </CardContent>
            </Card>

            {/* Join Room */}
            <Card className="border-gray-200 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className="bg-black p-4 rounded-full">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Unirse a Sala</h3>
                    <p className="text-gray-600">Ingresa el código de sala para unirte a una partida</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Código de sala"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8">Unirse</Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Match */}
            <Card className="border-gray-200 hover:shadow-lg transition-all cursor-pointer hover:border-yellow-400">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="bg-gray-800 p-4 rounded-full">
                    <Laugh className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Partida Rápida</h3>
                    <p className="text-gray-600">Únete a una partida aleatoria con otros jugadores</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Online Players */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-2">Jugadores conectados</p>
            <p className="text-4xl font-black text-yellow-400">1,247</p>
          </div>
        </div>
      </main>
    </div>
  )
}

function LoginView({ onBack, onRegister }: { onBack: () => void; onRegister: () => void }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-6 flex justify-between items-center border-b border-gray-200">
        <Button variant="ghost" onClick={onBack} className="text-black hover:bg-gray-50">
          ← Volver
        </Button>
        <div className="text-3xl font-black">LPM!</div>
        <div className="w-20"></div>
      </header>

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-md mx-auto">
          <Card className="border-gray-200 shadow-lg">
            <CardContent className="p-10">
              <h1 className="text-4xl font-black text-center mb-10">Iniciar Sesión</h1>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">Email o Usuario</label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">Contraseña</label>
                  <input
                    type="password"
                    className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>

                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 text-lg">
                  Iniciar Sesión
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  ¿No tenés cuenta?{" "}
                  <button onClick={onRegister} className="text-black font-semibold hover:text-yellow-600">
                    Registrate acá
                  </button>
                </p>
              </div>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">o continúa con</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Button variant="outline" className="border-gray-300 text-black hover:bg-gray-50 py-3">
                    Google
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-black hover:bg-gray-50 py-3">
                    Facebook
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function RegisterView({ onBack, onLogin }: { onBack: () => void; onLogin: () => void }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-6 flex justify-between items-center border-b border-gray-200">
        <Button variant="ghost" onClick={onBack} className="text-black hover:bg-gray-50">
          ← Volver
        </Button>
        <div className="text-3xl font-black">LPM!</div>
        <div className="w-20"></div>
      </header>

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-md mx-auto">
          <Card className="border-gray-200 shadow-lg">
            <CardContent className="p-10">
              <h1 className="text-4xl font-black text-center mb-10">Registrarse</h1>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">Nombre de Usuario</label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="ElMásZarpado"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">Contraseña</label>
                  <input
                    type="password"
                    className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">Confirmar Contraseña</label>
                  <input
                    type="password"
                    className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-yellow-400 bg-white border-gray-300 rounded focus:ring-yellow-400 mt-1"
                  />
                  <label className="text-sm text-gray-600 leading-relaxed">
                    Confirmo que soy mayor de 18 años y acepto los{" "}
                    <a href="#" className="text-black font-semibold hover:text-yellow-600">
                      términos y condiciones
                    </a>
                  </label>
                </div>

                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 text-lg">
                  Crear Cuenta
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  ¿Ya tenés cuenta?{" "}
                  <button onClick={onLogin} className="text-black font-semibold hover:text-yellow-600">
                    Iniciá sesión
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
