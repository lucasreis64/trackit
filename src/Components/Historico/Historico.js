/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { opacidade } from "../../Auxiliares/animations";
import { contexto } from "../../Context/Context";

export default function Historico() {
    const { setVisibilidade, userInfo } = useContext(contexto);
    const navigate = useNavigate();
    const [value, onChange] = useState(new Date());

    useEffect(() => {
        setVisibilidade(true);
        if (JSON.stringify(userInfo) === "{}") {
            console.log("oi");
            navigate("/");
        }
    }, []);
    return (
        <HistoricoContainer>
            <h1>Histórico</h1>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            <Calendar onChange={onChange} value={value} />
        </HistoricoContainer>
    );
}

const HistoricoContainer = styled.div`
    background: #e5e5e5;
    padding: 20px 15px 120px;
    animation: ${opacidade} 1s;
    h1 {
        font-size: 23px;
        color: #126ba5;
        margin-bottom: 10px;
    }
    h2 {
        font-size: 18px;
        color: #bababa;
        margin-top: 3px;
        margin-bottom: 20px;
    }
    .react-calendar {
        border-radius: 4px;
        width: 100%;
        background: white;
        font: inherit;
        line-height: 1.125em;
        border: 0;
        overflow: hidden;
    }
    .react-calendar button {
        margin: 0;
        border: 0;
        outline: none;
        font: inherit;
        font-size: 0.8em;
    }
    .react-calendar button:enabled:hover {
        cursor: pointer;
    }
    .react-calendar--doubleView {
        width: 700px;
    }
    .react-calendar--doubleView .react-calendar__viewContainer {
        display: flex;
        margin: -0.5em;
    }
    .react-calendar--doubleView .react-calendar__viewContainer > * {
        width: 50%;
        margin: 0.5em;
    }
    .react-calendar,
    .react-calendar *,
    .react-calendar *:before,
    .react-calendar *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .react-calendar__navigation {
        display: flex;
        height: 44px;
        margin-bottom: 10px;
    }
    .react-calendar__navigation button {
        min-width: 44px;
        background: none;
    }
    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
        background-color: #e6e6e6;
    }
    .react-calendar__navigation button[disabled] {
        background-color: #f0f0f0;
    }
    .react-calendar__month-view__weekdays {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.75em;
    }
    .react-calendar__month-view__weekdays__weekday {
        padding: 0.5em;
    }
    .react-calendar__month-view__weekNumbers {
        font-weight: bold;
    }
    .react-calendar__month-view__weekNumbers .react-calendar__tile {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75em;
        padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
    }
    .react-calendar__month-view__days__day--weekend {
        color: #d10000;
    }
    .react-calendar__month-view__days__day--neighboringMonth {
        color: #757575;
    }
    .react-calendar__year-view .react-calendar__tile,
    .react-calendar__decade-view .react-calendar__tile,
    .react-calendar__century-view .react-calendar__tile {
        padding: 2em 0.5em;
    }
    .react-calendar__tile {
        max-width: 100%;
        text-align: center;
        padding: 0.75em 0.5em;
        background: none;
    }
    .react-calendar__tile:disabled {
        background-color: #f0f0f0;
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
        background-color: #e6e6e6;
    }
    .react-calendar__tile--hasActive {
        background: #76baff;
    }
    .react-calendar__tile--hasActive:enabled:hover,
    .react-calendar__tile--hasActive:enabled:focus {
        background: #a9d4ff;
    }
    .react-calendar__tile--active {
        background: #006edc;
        color: white;
    }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
        background: #1087ff;
    }
    .react-calendar--selectRange .react-calendar__tile--hover {
        background-color: #e6e6e6;
    }
`;
