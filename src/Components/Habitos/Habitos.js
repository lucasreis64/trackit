/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { urlHabitos } from "../../Auxiliares/constants"
import { contexto } from "../../Context/Context"
import {loadingCards} from "../../Auxiliares/constants"
import { loading } from "../../Auxiliares/animations"
import CardHabito from "./CardHabito"
import NovoHabito from "./NovoHabito"

export default function Habitos () {
       const {setVisibilidade, userInfo}=useContext(contexto)
       const [habitos, setHabitos] = useState(null)
       const [addHabito, setAddHabito] = useState(false)
       const [nomeHabito, setNomeHabito] = useState('')
       const [diasSelecionados,setDiasSelecionados] = useState([])
       const navigate=useNavigate()
       useEffect(()=>{
              setVisibilidade(true)
              getHabitos()
       },[addHabito])

       function getHabitos(){
              if(JSON.stringify(userInfo)==="{}"){
                     console.log('oi')
                     navigate("/")
              }
              const listaHabitos = axios.get(urlHabitos, {
                     headers: {
                            'Authorization': `Bearer ${userInfo.token}`
                     }}
              )
              listaHabitos.then((response)=>setHabitos(response.data))
              listaHabitos.catch((response=>console.log('deu ruim')))
       }

       function novoHabito(){
              setAddHabito(true)
       }

       return(
              <HabitosContainer>
                     <div><h1>Meus hábitos</h1><button onClick={novoHabito}>+</button></div>
                     {addHabito?<NovoHabito nomeHabito={nomeHabito} setNomeHabito={setNomeHabito} setAddHabito={setAddHabito}
                     habitos={habitos} diasSelecionados={diasSelecionados} setDiasSelecionados={setDiasSelecionados}/>:<></>}
                     <div className="container-cards">
                            {habitos?
                                   (habitos.length>0)?habitos.map((h)=><CardHabito  getHabitos={getHabitos} key={h.id} habitos={h}/>)
                                                                             :
                                   <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                                   :
                                   loadingCards.map((l)=><CardHabitoLoading><div/></CardHabitoLoading>)
                            }
                     </div>
              </HabitosContainer>
       )
}

const HabitosContainer=styled.div`
       background: #E5E5E5;
       min-height: 100vh;
       padding: 20px 15px 120px;
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
       p{
              font-size: 17.976px;
              color: #666666;
       }
`

export const CardHabitoLoading = styled.div`
       width: 100%;
       height: 91px;
       overflow: hidden;
       background-color: whitesmoke;

       div{
       width: 100%;
       height: 91px;
       background: linear-gradient( to right , transparent, #e3e3e3, transparent);
       transform: translateX(-100%);
       animation: ${loading} 1s infinite;
}
`