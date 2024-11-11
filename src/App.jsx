import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import InformacaoTempo from './components/informacaoTempo/informacaoTempo'

function App() {
  const [tempo, setTempo] = useState({})
  const inputRef = useRef()

  async function BuscarCidade() {
    console.log(inputRef.current.value)

    const cidade = inputRef.current.value
    const key = "62ae6a876cd9334a11e4a58c140edd56"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`

    const dados = await axios.get(url)

    setTempo(dados.data)

    console.log(dados) 
  }

  return (
    <>
      <div>
        <input ref={inputRef} type='text' placeholder='Digite a cidade desejada'/>
        <button onClick={BuscarCidade}>Buscar</button>

        <InformacaoTempo tempo={tempo} />
      </div>
    </>
  )
}

export default App
