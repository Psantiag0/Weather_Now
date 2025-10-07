// Importações:
import { useState } from 'react'
import './App.css'

// Função principal do componente:
function App() {
	// Criação dos estados:
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState(null);
	
	// Chave da API:
	const API_KEY = import.meta.env.VITE_API_KEY

	// Função de busca:
	const handleSearch = async () => {
		if (!city) return

			const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
		)

	// Converte o JSON em objeto JavaScript:	
	const data = await response.json();

	// Atualiza o estado 'Weather' com os dados da API:
	setWeather(data)
	
  };

// Retorno JSX (a interface) com Tailwind CSS:
	return (
	// Container do formulário:
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-300 to-sky-700 text-white p-4">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Weather Now</h1>
        <h2 className="text-2xl font-semibold mb-6">Previsão do Tempo</h2>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Digite o nome da cidade..."
            value={city}
            onChange={(event) => setCity(event.target.value)}
			onKeyDown={(event) => event.key === 'Enter' && handleSearch()}
            className="flex-1 p-2 rounded-lg text-gray-700 border-sky-600 border"
          />
          <button
            onClick={handleSearch}
            className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-lg font-medium transition"
          >
            Buscar
          </button>
        </div>

		{/* Resposta da API: */}
        {weather && weather.main ? (
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              {weather.name}, {weather.sys.country}
            </h2>
            <p className="text-5xl font-light">
              {Math.round(weather.main.temp)}°C
            </p>
            <p className="capitalize text-lg">{weather.weather[0].description}</p>
            <img
              className="mx-auto mt-2"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="ícone do clima"
            />
          </div>
        ) : (
          <p className="text-white/80 italic">
            Nenhuma cidade buscada ainda.
          </p>
        )}
      </div>
    </div>
  )
}

export default App
