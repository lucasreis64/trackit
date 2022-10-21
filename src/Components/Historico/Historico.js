/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { contexto } from "../../Context/Context"

export default function Historico() {
    const {setVisibilidade}=useContext(contexto)
    const navigate = useNavigate()
    useEffect(()=>{
        setVisibilidade(true)
        navigate('/habitos')
    },[])
    return (
        <HistoricoContainer>

        </HistoricoContainer>
    )
}

const HistoricoContainer=styled.div`
    height: 100%;
    background-color: #E5E5E5;
    overflow: hidden;
`
