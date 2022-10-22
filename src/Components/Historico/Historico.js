/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import styled from "styled-components"
import { contexto } from "../../Context/Context"

export default function Historico() {
    const {setVisibilidade}=useContext(contexto)

    useEffect(()=>{
        setVisibilidade(true)
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
