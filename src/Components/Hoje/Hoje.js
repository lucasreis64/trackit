/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { contexto } from "../../Context/Context";

export default function Hoje() {
    const { setVisibilidade } = useContext(contexto);

    useEffect(() => {
        setVisibilidade(true);
    }, []);

    return (
        <HojeContainer>

        </HojeContainer>
    )
}

const HojeContainer = styled.div`
    background: #e5e5e5;
    min-height: 100vh;
    padding: 20px 15px 120px;
    div {
        display: flex;
        justify-content: space-between;
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
