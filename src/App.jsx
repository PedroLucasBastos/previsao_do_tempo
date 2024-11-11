import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import InformacaoTempo from './components/informacaoTempo/informacaoTempo'
import InformacaoTempo5Dias from './components/InformacaoTempo5Dias/InformacaoTempo5Dias'

function App() {
  const [tempo, setTempo] = useState()
  const [tempo5Dias, setTempo5Dias] = useState()
  const inputRef = useRef()

  async function BuscarCidade() {

    const cidade = inputRef.current.value
    const key = "62ae6a876cd9334a11e4a58c140edd56"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
    const url5Dias = `https:api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}&lang=pt_br&units=metric`

    const dados = await axios.get(url)
    const dados5dias = await axios.get(url5Dias)

    setTempo(dados.data)
    setTempo5Dias(dados5dias.data)

     
  }

  return (
    <>
      <div className='container'>
      <h1>Previsão do Tempo</h1>
        <input ref={inputRef} type='text' placeholder='Digite a cidade desejada'/>
        <button onClick={BuscarCidade}>Buscar</button>

        {tempo && <InformacaoTempo tempo={tempo} />} {/* Isso serve como um IF, para não deixar a aplicação tentar iniciar sem dados*/}
        {tempo5Dias && <InformacaoTempo5Dias tempo5Dias={tempo5Dias}/>}
      </div>
    </>
  )
}

export default App
