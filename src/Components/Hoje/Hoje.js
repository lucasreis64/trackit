/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deslizarEsquerda, opacidade } from "../../Auxiliares/animations";
import { diasSemana, loadingCards, urlHoje } from "../../Auxiliares/constants";
import { contexto } from "../../Context/Context";
import { CardHabitoLoading } from "../Habitos/Habitos";
import CardHoje from "./CardHoje";

export default function Hoje() {
    const { setVisibilidade, userInfo, porcentagem, setPorcentagem} = useContext(contexto)
    const [habitosHoje, setHabitosHoje] = useState(null)
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
        response.forEach((h)=>{
            if (h.done){quant++}
        })

        setPorcentagem(quant/response.length*100)
        if((quant/response.length*100)>0) setColor(true);else setColor(false)
    }

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
        <HojeContainer habitosHoje={habitosHoje}>
            <div><h1>{diaHoje}, {data[0]<10?0:''}{data[0]}/{data[1]<10?0:''}{data[1]}</h1><H2 color={color}>{habitosHoje?(porcentagem>0)?parseInt(porcentagem)+'% dos hábitos concluídos':'Nenhum hábito concluído ainda':'Carregando...'}</H2></div>
            {habitosHoje?
                habitosHoje.map((h,idx)=><CardHoje key={h.id} getHabitoDia={getHabitoDia} habitosHoje={h}  idx={idx}/>)
                                                                    :
                loadingCards.map((l, idx)=><CardHojeLoading key={idx}><div/></CardHojeLoading>)
            }
        </HojeContainer>
    )
}

const HojeContainer = styled.div`
    background: #e5e5e5;
    padding: 20px 15px 120px;
    animation: ${opacidade} 1s;
    h1 {
        font-size: 23px;
        color: #126ba5;
        margin-bottom: 10px;
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

const CardHojeLoading = styled(CardHabitoLoading)`
    width: 100%;
    height: 94px;
    margin-top: 20px;
    div{
        width: 100%;
        height: 94px;
    }
`