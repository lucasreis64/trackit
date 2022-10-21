import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { urlHabitos } from "../../Auxiliares/constants"
import { contexto } from "../../Context/Context"

export default function Habitos () {
       const {setVisibilidade}=useContext(contexto)
       const [habitos, setHabitos] = useState('')
       useEffect(()=>{
              setVisibilidade(true)
              const listaHabitos = axios.get(urlHabitos)
              listaHabitos.then((response)=>setHabitos(response))
       })

       return(
              <HabitosContainer>

              </HabitosContainer>
       )
}

const HabitosContainer=styled.div`
       background: #E5E5E5;
`