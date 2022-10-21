/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { urlHabitos } from "../../Auxiliares/constants"
import { contexto } from "../../Context/Context"
import CardHabito from "./CardHabito"
import NovoHabito from "./NovoHabito"

export default function Habitos () {
       const {setVisibilidade, userInfo, setUserInfo}=useContext(contexto)
       const [habitos, setHabitos] = useState('')
       const [addHabito, setAddHabito] = useState(false)
       const navigate=useNavigate()
       useEffect(()=>{
              setVisibilidade(true)
              
              if(JSON.stringify(userInfo)==="{}"){
                     navigate("/")
              }
              const listaHabitos = axios.get(urlHabitos, {
                     headers: {
                            'Authorization': `Bearer ${userInfo.token}`
                     }}
              )
              listaHabitos.then((response)=>setHabitos(response.data))
              listaHabitos.catch((response=>console.log('deu ruim')))
       },[])

       function novoHabito(){
              setAddHabito(true)
       }

       return(
              <HabitosContainer>
                     <div><h1>Meus hábitos</h1><button onClick={novoHabito}>+</button></div>
                     {addHabito?<NovoHabito setAddHabito={setAddHabito} habitos={habitos}/>:<></>}
                     <div className="container-cards">
                            {habitos?
                                   habitos.map((h)=><CardHabito key={h.id} habitos={h}/>)
                                   :
                                   <></>
                            }
                     </div>
              </HabitosContainer>
       )
}

const HabitosContainer=styled.div`
       background: #E5E5E5;
       height: 100vh;
       padding: 20px 15px;
       overflow: hidden;
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

/* useEffect(()=>{
       setVisibilidade(true)

       const listaHabitos = axios.post(urlHabitos, {
              name: "Nome do hábito",
              days: [1, 3, 5]
       }, 
       {
              headers: {
                     'Authorization': `Bearer ${userInfo.token}`
              }
       })
       listaHabitos.then((response)=>console.log('ok'))
       listaHabitos.catch((response=>console.log(response)))
},[]) */