/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { urlSignUp } from "../../Auxiliares/constants";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../img/TrackIt-Logo.png"
import axios from "axios";
import { carregamento } from "../../Auxiliares/constants";
import { contexto } from "../../Context/Context";
import Swal from "sweetalert2";
import styled from "styled-components";
import { deslizarCima, tremerZoom } from "../../Auxiliares/animations";

let tempoMs;
export default function Cadastro() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const [loading, setLoading] = useState(false)
    const {setVisibilidade, noturno, setEntrou, entrou} = useContext(contexto)
    tempoMs=400;
    useEffect(()=>{
                setVisibilidade(false)
                setEntrou(!entrou)
    },[])
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
        login.catch(({response})=>{
            if (response.status===409) {
                Swal.fire({
                    icon: 'error',
                    title: 'Conflito!',
                    text: 'Usuário já existe!',
                    footer: 'Tente novamente!'
                })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Erro desconhecido!',
                    text: 'Cheque sua conexão com a internet!',
                    footer: 'Tente novamente!'
                })
            }
            setLoading(false)
        })
    }

    return (
        <CadastroContainer noturno={noturno}>
            <img src={logo} alt= ""/>
            {!loading?
            <>
                <form action="/hoje" onSubmit={handleSubmit}>
                    <input name="email" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    <input name="password" type="password" placeholder="senha" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    <input name="name" type="name" placeholder="nome" value={nome} onChange={(e)=>setNome(e.target.value)} required/>
                    <input name="url" type="url" placeholder="foto" value={foto} onChange={(e)=>setFoto(e.target.value)} required/>
                    <button>Cadastrar</button>
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


function tempo() {
    tempoMs+=50
    return tempoMs+'ms'
}

export const CadastroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: start;
    padding: 30% 10%;
    box-sizing: border-box;
    background-color: ${props=> props.noturno?'#1C1C1C':'white'};
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    animation: ${deslizarCima} ${tempo};
    img{
        height: 28%;
        margin-bottom: 15%;
        animation: ${deslizarCima} ${tempo}, ${tremerZoom} ${'500ms'} 1 ${tempo};;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 100%;
    }
    input{
        padding-left: 8px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        box-sizing: border-box;
        animation: ${deslizarCima} ${tempo};
    }
    input.check{
        width: 15px;
        height: 15px;
        margin-left: 10px;
        animation: ${deslizarCima} ${tempo};
    }
    label{
        font-size: 15px;
        color: gray;
        animation: ${deslizarCima} ${tempo};
    }
    input::placeholder{
        font-weight: 400;
        font-size: 20px;
        color: #DBDBDB;
        font-family: 'Lexend Deca';
    }
    button{
        font-family: 'Lexend Deca';
        width: 100%;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: ${deslizarCima} ${tempo};
    }
    p{
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-decoration-line: underline;
        color: #52B6FF;
        animation: ${deslizarCima} ${tempo};
    }
`