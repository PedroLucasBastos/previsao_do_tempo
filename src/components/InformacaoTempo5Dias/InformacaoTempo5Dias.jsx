/* eslint-disable react/prop-types */

import "./InformacaoTempo5Dias.css";

function InformacaoTempo5Dias({ tempo5Dias }) {
  console.log(tempo5Dias);

  const previsaoDiaria = {};

  for (let previsao of tempo5Dias.list) {
    const data = new Date(previsao.dt * 1000).toLocaleDateString();

    if (!previsaoDiaria[data]) {
      previsaoDiaria[data] = previsao;
    }
  }

  const proximos5Dias = Object.values(previsaoDiaria).slice(0, 6);

  function converterData(data) {
    const novaData = new Date(data.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });

    return novaData;
  }

  return (
    <div className="tempo-container">
      <h3>Previsão para os próximos 5 dias</h3>
      <div className="lista-previsao">
        {proximos5Dias.map((previsao) => (
          <div key={previsao.dt} className="item-previsao">
            <p className="previsao-dia">{converterData(previsao)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
            />
            <p className="previsao-descricao">
              {previsao.weather[0].description}
            </p>
            <p>
              Min {Math.round(previsao.main.temp_min)}°C / Max{" "}
              {Math.round(previsao.main.temp_max)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InformacaoTempo5Dias;
