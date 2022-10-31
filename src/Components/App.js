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


function App() {
    return (
        <Screen>
            
            <GlobalStyle />
            
            <SmartPhoneContainer>
                <BrowserRouter>
                    <Footer/>
                    <Header/>
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
`

const SmartPhoneContainer = styled.div`
    width: 500px;
    height: 100vh;
    background-color: #e5e5e5;
    padding: 70px 0px;
    box-sizing: border-box;
    overflow: scroll;
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
