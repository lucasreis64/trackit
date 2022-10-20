import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../Auxiliares/GlobalStyles";

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
