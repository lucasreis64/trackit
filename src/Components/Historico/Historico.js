/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { contexto } from "../../Context/Context"

export default function Historico() {
    const {setVisibilidade, userInfo}=useContext(contexto)
    const navigate = useNavigate()
    useEffect(()=>{
        setVisibilidade(true)
        if(JSON.stringify(userInfo)==="{}"){
            console.log('oi')
            navigate("/")
        }
    },[])
    return (
        <HistoricoContainer>
            <h1>Histórico</h1>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </HistoricoContainer>
    )
}

const HistoricoContainer=styled.div`
    background: #e5e5e5;
    min-height: 100vh;
    padding: 20px 15px 120px;
    h1 {
        font-size: 23px;
        color: #126ba5;
        margin-bottom: 10px;
    }
    h2{
        font-size: 18px;
        color: #BABABA;
        margin-top: 3px;
    }
`
