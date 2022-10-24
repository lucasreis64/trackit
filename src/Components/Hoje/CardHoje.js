import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { contexto } from "../../Context/Context"
import check from "../../img/check.png"

export default function CardHoje({habitosHoje, getHabitoDia}) {
    const {userInfo} = useContext(contexto)
    const [colorRecorde, setColorRecorde] = useState(false)
    const [colorAtual, setColorAtual] = useState(false)
    const atual = habitosHoje.currentSequence
    const recorde = habitosHoje.highestSequence
    useEffect(()=>{
        if (habitosHoje.done) setColorAtual(true)
        if (recorde===atual) setColorRecorde(true)
    },[])
    function handleClick(id){
        if(habitosHoje.done){
            const checkPost = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
            '',{
                headers: {
                    'Authorization': `Bearer ${userInfo.token}`
                }
            })
            checkPost.then(()=>{getHabitoDia()})
            checkPost.then(()=>console.log('tudo errado'))
        }
        else{
            const checkPost = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
            '',{
                headers: {
                    'Authorization': `Bearer ${userInfo.token}`
                }
            })
            checkPost.then(()=>{setColorAtual(true);if(recorde===atual) setColorRecorde(true);getHabitoDia()})
            checkPost.then(()=>console.log('tudo errado'))
        }
    }

    return (
        <CardHojeDiv colorAtual={colorAtual} colorRecorde={colorRecorde} checked={habitosHoje.done}>
            <div>
                <h1>{habitosHoje.name}</h1>
                <h2>Sequência atual: <span>{atual}</span></h2>
                <h2>Seu recorde: <span>{}{recorde}</span></h2>
            </div>
            <button onClick={()=>handleClick(habitosHoje.id)}>
                <img src={check} alt=""/>
            </button>
        </CardHojeDiv>
    )
}


const CardHojeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 94px;
    margin-top: 20px;
    background-color: white !important;
    align-items: center;
    box-sizing: border-box;
    padding: 0 12px;
    h1{
        font-size: 20px;
        color: #666666;
    }
    h2{
        font-size: 13px;
        color: #666666;
    }
    button{
        width: 69px!important;
        height: 69px!important;
        justify-content: center;
        align-items: center;
        background: ${props=>props.checked?'#8FC549':'#EBEBEB'} !important;
        img{
            margin-top: 2px;
        }
    }
`