/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { deslizarEsquerda } from "../../Auxiliares/animations"
import { carregamento } from "../../Auxiliares/constants"
import { contexto } from "../../Context/Context"
import check from "../../img/check.png"

export default function CardHoje({habitosHoje, getHabitoDia, tempo}) {
    const {userInfo, noturno} = useContext(contexto)
    const [colorRecorde, setColorRecorde] = useState(false)
    const [colorAtual, setColorAtual] = useState(false)
    const [loading, setLoading] = useState(false)
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
            checkPost.then(()=>{setColorAtual(false); if(recorde===atual) setColorRecorde(true); setTimeout(()=>setLoading(false),800) ; getHabitoDia()})
            checkPost.then(()=>console.log('tudo errado'))
        }
        else{
            const checkPost = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
            '',{
                headers: {
                    'Authorization': `Bearer ${userInfo.token}`
                }
            })
            checkPost.then(()=>{setColorAtual(true);if(recorde===atual); setColorRecorde(true); setTimeout(()=>setLoading(false),800); getHabitoDia()})
        }
    }

    return (
        <CardHojeDiv noturno={noturno} tempo={tempo} checked={habitosHoje.done}>
            <div>
                <h2>{habitosHoje.name}</h2>
                <h3>Sequ??ncia atual: <Span noturno={noturno} colorAtual={colorAtual}>{atual}</Span></h3>
                <h3>Seu recorde: <Span2 noturno={noturno} colorRecorde={colorRecorde}>{}{recorde}</Span2></h3>
            </div>
            {loading?
                <button disabled>
                    {carregamento}
                </button>
                :
                <button onClick={()=>{handleClick(habitosHoje.id);setLoading(true)}}>
                    <img src={check} alt=""/>
                </button>
            }
        </CardHojeDiv>
    )
}


const CardHojeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 94px;
    margin-top: 20px;
    background-color: ${props=> props.noturno?'#A9A9A9':'white'}!important;
    align-items: center;
    box-sizing: border-box;
    padding: 0 12px;
    animation: ${deslizarEsquerda} 1s 1;
    h2{
        font-size: 20px;
        color:  ${props=>props.noturno?'black':'#666666'};
        margin-bottom: 10px;
    }
    h3{
        font-size: 13px;
        color:  ${props=>props.noturno?'black':'#666666'};
        margin-bottom:3px;
    }
    button{
        display: flex;
        width: 69px!important;
        height: 69px!important;
        justify-content: center;
        align-items: center;
        background: ${props=>props.checked?'#8FC549':'#EBEBEB'} !important;
        box-sizing: border-box;
        img{
            margin-top: 2px;
        }
        div{
            width: 65px;
        }
    }
`

const Span = styled.span`
    color: ${props=>props.colorAtual?   props=>props.noturno?'green':'#8FC549'
                                                        :
                                        props=>props.noturno?'black':'#666666'}
`

const Span2 = styled.span`
    color:${props=>props.colorRecorde?props=>props.noturno?'green':'#8FC549'
                                                        :
                                            props=>props.noturno?'black':'#666666'}
`