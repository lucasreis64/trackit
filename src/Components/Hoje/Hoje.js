/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { diasSemana, urlHoje } from "../../Auxiliares/constants";
import { contexto } from "../../Context/Context";
import CardHoje from "./CardHoje";

export default function Hoje() {
    const { setVisibilidade, userInfo, porcentagem, setPorcentagem } = useContext(contexto)
    const [habitosHoje, setHabitosHoje] = useState([])
    const [diaHoje, setDiaHoje] = useState('')
    const [dia, setDia] = useState('')
    const [data, setData] = useState([])
    const [color, setColor] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
            if(JSON.stringify(userInfo)==="{}"){
                    console.log('oi')
                    navigate("/")
            }
            getDia()
            setVisibilidade(true);
            getHabitoDia()
    },[])

    function getDia() {
        const str = dayjs().format('DD/MM/YYYY')
        let parts = str.split('/'),
            year = parseInt(parts[2], 10),
            month = parseInt(parts[1], 10) - 1,
            day = parseInt(parts[0], 10),
            date = new Date(year, month, day),
            dia = date.getDay();
        setDiaHoje(diasSemana[dia])
        setDia(dia)
        setData([day,month])
    }
    
    function porcentagemTarefas (response) {
        let quant=0
        console.log(response)
        response.forEach((h)=>{
            if (h.done){quant++;console.log(quant)}
        })
        console.log(quant,response.length)
        setPorcentagem(quant/response.length*100)
        if((quant/response.length*100)>0) setColor(true);else setColor(false)
    }
    console.log(color)
    function getHabitoDia() {
        const habitosHojeGet = axios.get(urlHoje,
            {
                headers: {
                    'Authorization': `Bearer ${userInfo.token}`
                }
            })
        
        habitosHojeGet.then((response)=>{setHabitosHoje(response.data); porcentagemTarefas(response.data)})
        
        habitosHojeGet.catch((response)=>console.log(response))
    }

    return (
        <HojeContainer>
            <div><h1>{diaHoje}, {data[0]<10?0:''}{data[0]}/{data[1]<10?0:''}{data[1]}</h1><H2 color={color}>{(porcentagem>0)?porcentagem+'% dos hábitos concluídos':'Nenhum hábito concluído ainda'}</H2></div>
            {habitosHoje.map((h,idx)=><CardHoje key={h.id} getHabitoDia={getHabitoDia} habitosHoje={h}  idx={idx}/>)}
        </HojeContainer>
    )
}

const HojeContainer = styled.div`
    background: #e5e5e5;
    min-height: 100vh;
    padding: 20px 15px 120px;
    h1 {
        font-size: 23px;
        color: #126ba5;
    }
    button {
        width: 40px;
        height: 35px;
        background: #52b6ff;
        border-radius: 4.63636px;
        border: none;
        color: white;
        font-size: 26.976px;
    }
    .container-cards {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 7px;
    }
    p {
        font-size: 17.976px;
        color: #666666;
    }
`;

const H2 = styled.h2`
    font-size: 18px;
    color: ${props=>props.color?'#8FC549':'#BABABA'};
    margin-top: 3px;
`