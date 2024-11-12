
# Previsão do Tempo

Este projeto é uma aplicação simples para exibir a previsão do tempo utilizando a API do OpenWeatherMap. Ele permite que você busque a previsão do tempo de uma cidade específica, exiba os dados de temperatura e previsão de 5 dias. Enquanto os dados estão sendo carregados, uma animação de carregamento é exibida.

## Tecnologias e Bibliotecas Utilizadas

-<img align="center" alt="ReactJs" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg">**ReactJS**: Biblioteca JavaScript para construir a interface de usuário.

-<img align="center" alt="vitejs" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg">**Vite**: Ferramenta de construção moderna e rápida para projetos frontend.
-<img align="center" alt="axios" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg">**Axios**: Biblioteca para realizar requisições HTTP.
-**Lottie**: Biblioteca para renderizar animações JSON (Lottie) na interface.
-**OpenWeatherMap API**: API para obter informações sobre o tempo.

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina. Você pode verificar se o Node.js está instalado executando:

```bash
node -v
```

Se o Node.js não estiver instalado, baixe-o em: [https://nodejs.org](https://nodejs.org).

### Passos para rodar o projeto

1. **Clone o repositório**:

   Execute o seguinte comando para clonar o repositório:

   ```bash
   git clone git@github.com:PedroLucasBastos/previsao_do_tempo.git
   ```

2. **Instale as dependências**:

   Navegue até a pasta do projeto e execute o comando para instalar as dependências necessárias:

   ```bash
   cd /previsao_do_tempo
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:

   Para rodar o projeto em modo de desenvolvimento, use o Vite:

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**:

   Abra seu navegador e vá para o endereço indicado para ver a aplicação em funcionamento.

## Como Funciona

1. **Busca de cidade**: Ao digitar o nome de uma cidade e pressionar "Enter" ou clicar no botão "Buscar", a aplicação faz uma requisição à API do OpenWeatherMap e exibe a previsão do tempo atual e os dados de 5 dias da cidade solicitada.

2. **Animação de Carregamento**: Durante o carregamento dos dados, uma animação Lottie é exibida no centro da tela.

3. **Exibição de erro**: Se a cidade não for encontrada ou ocorrer um erro na requisição, uma mensagem de erro é exibida na tela.

## Funcionalidades

- Exibe a previsão do tempo de uma cidade.
- Mostra os dados de temperatura atual e previsão de 5 dias.
- Animação de carregamento enquanto os dados estão sendo buscados.
- Mensagem de erro caso a cidade não seja encontrada ou haja algum problema na requisição.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
