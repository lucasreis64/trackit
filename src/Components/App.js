import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "../Auxiliares/GlobalStyles"
import Habitos from "./Habitos/Habitos"
import Hoje from "./Hoje/Hoje"
import Login from "./Login/Login"
import Cadastro from "./Cadastro/Cadastro"
import Historico from "./Historico/Historico"

function App() {
  return (
    <>
      <GlobalStyle/>  
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
