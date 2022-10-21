/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { contexto } from "../../Context/Context"

export default function Hoje() {
    const {setVisibilidade}=useContext(contexto)
    const navigate = useNavigate()

    useEffect(()=>{
        setVisibilidade(true)
        navigate('/habitos')
    },[])

    return (
        <HojeContainer>
        
        </HojeContainer>
    )
};

const HojeContainer=styled.div`
    background: #E5E5E5;
    height: 100%;
`
