/* eslint-disable react/prop-types */
import './informacaoTempo.css'

function InformacaoTempo({ tempo }) {

  return (
    <div className="tempo-container">
      <h2>{tempo.name}</h2>
      <div className="tempo-info">
        <img
          src={`http://openweathermap.org/img/wn/${tempo.weather[0].icon}.png`}
        />
        <p className="temperatura">{Math.round(tempo.main.temp)} °C</p>
      </div>
      <div>
        <p className="descricao">{tempo.weather[0].description}</p>
      </div>
      <div className="detalhes">
        <p>Sensação termica:{Math.round(tempo.main.feels_like)}</p>
        <p>Pressão: {tempo.main.pressure}</p>
        <p>Umidade: {tempo.main.humidity}%</p>
      </div>
    </div>
  );
}

export default InformacaoTempo;
