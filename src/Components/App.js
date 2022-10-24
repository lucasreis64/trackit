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
`

const SmartPhoneContainer = styled.div`
    width: 350px;
    height: 100vh;
    background-color: white;
    padding: 70px 0px;
    @media (max-width: 600px) {
        width: 100%;
    }
`

export default App;
