/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { urlHoje } from "../../Auxiliares/constants";
import { contexto } from "../../Context/Context";
import CardHoje from "./CardHoje";

export default function Hoje() {
    const { setVisibilidade, userInfo } = useContext(contexto)
    const [habitosHoje, setHabitosHoje] = useState([])

    useEffect(() => {
        setVisibilidade(true);
        const habitosHojeGet = axios.get(urlHoje,
            {
                headers: {
                    'Authorization': `Bearer ${userInfo.token}`
                }
            })
        habitosHojeGet.then((response)=>setHabitosHoje(response.data))
        habitosHojeGet.catch((response)=>console.log(response))
    }, []);

    return (
        <HojeContainer>
            <div><h1>Meus hábitos</h1><h2>Nenhum hábito concluído ainda</h2></div>
            {}
            <CardHoje/>
        </HojeContainer>
    )
}

const HojeContainer = styled.div`
    background: #e5e5e5;
    min-height: 100vh;
    padding: 20px 15px 120px;
    div {
        h2{
            font-size: 18px;
            color: #BABABA;
            margin-top: 3px;
        }
    }
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
