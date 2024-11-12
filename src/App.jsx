import { useState, useRef } from "react";
import Lottie from "lottie-react"
import axios from "axios";
import "./App.css";
import InformacaoTempo from "./components/informacaoTempo/informacaoTempo";
import InformacaoTempo5Dias from "./components/InformacaoTempo5Dias/InformacaoTempo5Dias";
import loadingAnimation from "../public/iconesJson/AnimationLoadingGrey.json";


function App() {
  const [tempo, setTempo] = useState();
  const [tempo5Dias, setTempo5Dias] = useState();
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const inputRef = useRef();

  async function BuscarCidade() {
    const cidade = inputRef.current.value;
    const key = "62ae6a876cd9334a11e4a58c140edd56";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`;
    const url5Dias = `https:api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}&lang=pt_br&units=metric`;
    setCarregando(true);
    setErro(null);

    try {
      const dados = await axios.get(url);
      const dados5dias = await axios.get(url5Dias);
      setTempo(dados.data);
      setTempo5Dias(dados5dias.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErro("Cidade não encontrada. Tente novamente.");
      } else {
        setErro("Ocorreu um erro ao buscar os dados. Tente novamente.");
      }
    } finally {
      setTimeout(() => setCarregando(false), 2000);
    }
  }

  function apertaEnter(evento) {
      if (evento.key == 'Enter') {
        BuscarCidade();
      }
    
  }

  return (
    <>
      <div className="container">
        <div className="container-interno">
          <h1>Previsão do Tempo</h1>
          <input
            ref={inputRef}
            type="text"
            placeholder="Digite a cidade desejada"
            onKeyUp={apertaEnter}
          />
          <button onClick={BuscarCidade}>Buscar</button>
          {carregando && 
            <div className="carregando">
                <Lottie animationData={loadingAnimation}
                loop="true"/>
            </div>}
          {!carregando && erro && <p className="erro-busca">{erro}</p>}
          {!carregando && tempo && <InformacaoTempo tempo={tempo} />}{" "}
          {/* Isso serve como um IF, para não deixar a aplicação tentar iniciar sem dados*/}
          {!carregando && tempo5Dias && <InformacaoTempo5Dias tempo5Dias={tempo5Dias} />}
        </div>
      </div>
    </>
  );
}

export default App;
