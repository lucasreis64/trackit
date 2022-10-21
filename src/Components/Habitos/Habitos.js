import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { urlHabitos } from "../../Auxiliares/constants"
import { contexto } from "../../Context/Context"
import CardHabito from "./CardHabito"

export default function Habitos () {
       const {setVisibilidade, userInfo}=useContext(contexto)
       const [habitos, setHabitos] = useState('')
       useEffect(()=>{
              setVisibilidade(true)
              const listaHabitos = axios.get(urlHabitos, {
                     headers: {
                            'Authorization': `Bearer ${userInfo.token}`
                     }}
              )
              listaHabitos.then((response)=>setHabitos(response.data))
       },[])
       console.log(habitos)
       return(
              <HabitosContainer>
                     <div><h1>Meus hábitos</h1><button>+</button></div>
                     <div class="container-cards">
                            {!habitos?
                                   <CardHabito habitos={habitos}/>
                                   :
                                   <></>
                            }
                     </div>
              </HabitosContainer>
       )
}

const HabitosContainer=styled.div`
       background: #E5E5E5;
       height: 100%;
       padding: 20px 15px;
       div{
              display: flex;
              justify-content: space-between;
       }
       h1{
              font-size: 23px;
              color: #126BA5;
       }
       button{
              width: 40px;
              height: 35px;
              background: #52B6FF;
              border-radius: 4.63636px;
              border: none;
              color: white;
              font-size: 26.976px;
       }
       .container-cards{
              margin-top: 20px;
              display: flex;
              flex-direction: column;
              gap: 7px;
       }
`