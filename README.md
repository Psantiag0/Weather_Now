# 🌤️ Weather App

Um aplicativo simples de previsão do tempo desenvolvido com **React + Vite**, que consome a **API do OpenWeather** para exibir as condições climáticas atuais de qualquer cidade digitada pelo usuário.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ **React** — criação da interface e componentes  
- ⚡ **Vite** — ambiente de desenvolvimento rápido  
- 🎨 **Tailwind CSS** — para estilização  
- 🌐 **OpenWeather API** — fornecimento dos dados meteorológicos  

---

## 🧩 Funcionalidades

- Busca por cidade digitando no campo de pesquisa  
- Permite pressionar **Enter** para realizar a busca  
- Exibe:
  - Nome da cidade e país  
  - Temperatura atual (em °C)  
  - Descrição do clima (ex: “céu limpo”)  
  - Ícone representativo do tempo  
- Proteção da **API Key** usando variáveis de ambiente (`.env`)

---

## 🧱 Estrutura do Projeto

src/

  ├── App.jsx # Componente principal da aplicação

  ├── App.css # Estilos globais

  ├── main.jsx # Ponto de entrada do React

  ├── components/ # (opcional) Componentes reutilizáveis

  └── assets/ # (opcional) Imagens e ícones

---

## ⚙️ Configuração do Ambiente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Psantiag0/weather-app.git
cd weather-app
```

### 2️⃣ Instalar as dependências

```bash
npm install
```

### 3️⃣ Criar o arquivo .env

Crie um arquivo chamado .env na raiz do projeto e adicione sua chave da OpenWeather API:

```bash
VITE_API_KEY=sua_chave_aqui
```

### 💻 Executar o projeto

Inicie o servidor local:

```bash
npm run dev
```

### Abra o navegador e acesse:

```bash
http://localhost:5173
```

### 🧪 Testes e verificação

Digite uma cidade e pressione Enter para ver o clima.

Se quiser testar erros, digite um nome inexistente (ex: asduiasd) para verificar o tratamento da API.

No console do navegador, você pode confirmar se a variável import.meta.env.VITE_API_KEY está sendo lida corretamente.

### 🌍 API utilizada

OpenWeatherMap API
https://openweathermap.org/api

Exemplo de endpoint:

```bash
https://api.openweathermap.org/data/2.5/weather?q={CITY}&units=metric&appid={API_KEY}&lang=pt_br
```

---

### 🧰 Próximas Melhorias:

- Tratamento de erros (mensagem “Cidade não encontrada”)
- Exibição de informações adicionais (umidade, vento, sensação térmica)
- Implementar geocoding (converter nome da cidade em latitude/longitude)
- Adicionar modo escuro (dark mode)
- Layout responsivo e estilização aprimorada

---

### 🧑‍💻 Autor

Desenvolvido por Paulo Santiago 💡

📅 Projeto em andamento — aprendizado e prática com React, APIs e variáveis de ambiente.

---

### 📜 Licença

Este projeto é de uso livre para fins de estudo e portfólio.
Sinta-se à vontade para clonar, modificar e aprimorar! 🌱
