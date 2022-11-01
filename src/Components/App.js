import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../Auxiliares/GlobalStyles";
import Habitos from "./Habitos/Habitos";
import Hoje from "./Hoje/Hoje";
import Login from "./Login/Login";
import Cadastro from "./Cadastro/Cadastro";
import Historico from "./Historico/Historico";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import diaNoite from "../img/dia-e-noite.png"
import diaNoiteWhite from "../img/dia-e-noite-white.png"
import { useContext, useEffect, useState } from "react";
import { contexto } from "../Context/Context";
import { opacidade } from "../Auxiliares/animations";

function App() {
    const {noturno, setNoturno} = useContext(contexto)
    const [entrou, setEntrou] = useState(false)
    useEffect(()=>setEntrou(true),[])
    return (
        <Screen entrou={entrou}>
            <GlobalStyle />
            <SmartPhoneContainer noturno={noturno}>
                <BrowserRouter>
                    <Footer/>
                    <Header/>
                    {noturno?
                        <img className="dia-noite" onClick={()=>setNoturno(!noturno)} src={diaNoiteWhite} alt=""/>
                                                                    :
                        <img className="dia-noite" onClick={()=>setNoturno(!noturno)} src={diaNoite} alt=""/>
                    }
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/hoje" element={<Hoje />} />
                        <Route path="/habitos" element={<Habitos />} />
                        <Route path="/historico" element={<Historico />} />
                    </Routes>
                </BrowserRouter>
            </SmartPhoneContainer>
        </Screen>
    );
}

const Screen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    .dia-noite{
        position: absolute;
        top:12.5px;
        left: 47%;
        z-index: 2;
        width: 45px;
        height: 45px;
        animation: ${opacidade} 3000ms;
    }
`

const SmartPhoneContainer = styled.div`
    width: 500px;
    height: 100vh;
    background-color: ${props=> props.noturno?'#1C1C1C':'#e5e5e5'};
    padding: 70px 0px;
    box-sizing: border-box;
    overflow: scroll;
    position: relative;
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
    display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    @media (max-width: 600px) {
        width: 100%;
        height: 100vh;
    }
`

export default App;
