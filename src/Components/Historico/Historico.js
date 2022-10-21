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
    })
    return (
        <HistoricoContainer>

        </HistoricoContainer>
    )
}

const HistoricoContainer=styled.div`
`
