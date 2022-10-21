import { LoginContainer } from "../Login/Login"
import { useContext, useEffect, useState } from "react";
import { urlSignUp } from "../../Auxiliares/constants";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../img/TrackIt-Logo.jpg"
import axios from "axios";
import { carregamento } from "../../Auxiliares/constants";
import { contexto } from "../../Context/Context";

export default function Cadastro() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const [loading, setLoading] = useState(false)
    const {setVisibilidade} = useContext(contexto)
    useEffect(()=>{
                setVisibilidade(false)
    })
    function handleSubmit (event) {
        
        event.preventDefault();
        setLoading(true);
        const login = axios.post(urlSignUp, {
            email: email,
            name: nome,
            image: foto,
            password: password
        })
        login.then(()=>navigate("/"))
        login.catch((response)=>{
            setLoading(false)
            alert('Tente novamente!')
        })
    }

    return (
        <CadastroContainer>
            <img src={logo} alt= ""/>
            {!loading?
            <>
                <form action="/hoje" onSubmit={handleSubmit}>
                    <input name="email" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    <input name="password" type="password" placeholder="senha" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    <input name="name" type="name" placeholder="nome" value={nome} onChange={(e)=>setNome(e.target.value)} required/>
                    <input name="url" type="url" placeholder="foto" value={foto} onChange={(e)=>setFoto(e.target.value)} required/>
                    <button>Entrar</button>
                </form>
                <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
            </>
                :
            <>
                <form action="/hoje" onSubmit={handleSubmit}>
                    <input name="email" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} disabled/>
                    <input name="password" type="password" placeholder="senha" value={password} onChange={(e)=>setPassword(e.target.value)} disabled/>
                    <input name="name" type="name" placeholder="nome" value={nome} onChange={(e)=>setNome(e.target.value)} disabled/>
                    <input name="url" type="url" placeholder="foto" value={foto} onChange={(e)=>setFoto(e.target.value)} disabled/>
                    <button disabled>{carregamento}</button>
                </form>
                <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
            </>
            }
        </CadastroContainer>
    )
};


const CadastroContainer=LoginContainer

