/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { urlLogin } from "../../Auxiliares/constants";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../img/TrackIt-Logo.png"
import axios from "axios";
import { carregamento } from "../../Auxiliares/constants";
import { contexto } from "../../Context/Context";
import Swal from "sweetalert2";
import { deslizarCima, tremerZoom } from "../../Auxiliares/animations";

let tempoMs;

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const {setUserInfo,userInfo}=useContext(contexto)
    const { setVisibilidade, permanecerConectado, setPermanecerConectado, noturno, setEntrou, entrou } = useContext(contexto)
    tempoMs = 400
    
    useEffect(()=>{
        setVisibilidade(false)
        const userInfoCopy=JSON.parse(localStorage.getItem('userInfo'))
        setEntrou(!entrou)
        if(userInfoCopy!==null){
            setUserInfo(userInfoCopy)
            navigate("/hoje")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    function handleSubmit (event) {
        event.preventDefault();
        setLoading(true)
        const login = axios.post(urlLogin, {
            email: email,
            password: password
        })
        login.then((response)=>{
            console.log(permanecerConectado)
            if(permanecerConectado){
                const userInfoSerializada = JSON.stringify(response.data);
                localStorage.setItem("userInfo", userInfoSerializada);
            }
            setUserInfo(response.data)
            navigate("/hoje")
        })
        login.catch((response)=>{
            setLoading(false)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuário ou senha incorretos!',
                footer: 'Tente novamente!'
            })
        })
    }

    return (
        <LoginContainer noturno={noturno}>
            <img src={logo} alt= ""/>
            {!loading?
            <>
                <form action="/hoje" onSubmit={handleSubmit}>
                    <input name="email" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    <input name="password" type="password" placeholder="senha" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    <button>Cadastrar</button>
                    <label>Permanecer conectado?<input className='check' type="checkbox" checked={permanecerConectado} onChange={()=>setPermanecerConectado(!permanecerConectado)}/></label>
                </form>
                <Link to="/cadastro"><p>Já tem uma conta? Faça login!</p></Link>
            </>
                :
            <>
                <form action="/hoje" onSubmit={handleSubmit}>
                    <input name="email" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} disabled/>
                    <input name="password" type="password" placeholder="senha" value={password} onChange={(e)=>setPassword(e.target.value)} disabled/>
                    <button disabled>{carregamento}</button>
                    <label>Permanecer conectado?<input disabled className='check' type="checkbox" value={permanecerConectado}/></label>
                </form>
                <Link to="/cadastro"><p>Já tem uma conta? Faça login!</p></Link>
            </>
            }
        </LoginContainer>
    )
}


function tempo() {
    tempoMs+=50
    return tempoMs+'ms'
}

export const LoginContainer = styled.div`
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
        height: 170px;
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