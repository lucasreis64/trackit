import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { urlLogin } from "../../Auxiliares/constants";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../img/TrackIt-Logo.jpg"
import axios from "axios";
import { carregamento } from "../../Auxiliares/constants";
import { contexto } from "../../Context/Context";


export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const {setUserInfo}=useContext(contexto)
    const {setVisibilidade} = useContext(contexto)
    
    useEffect(()=>{
        setVisibilidade(false)
    })
    function handleSubmit (event) {
        event.preventDefault();
        setLoading(true)
        const login = axios.post(urlLogin, {
            email: email,
            password: password
        })
        login.then((response)=>{
            setUserInfo(response.data)
            navigate("/hoje")
            console.log(response)
        })
        login.catch((response)=>{
            setLoading(false)
            alert('Tente novamente!')
        })
    }

    return (
        <LoginContainer>
            <img src={logo} alt= ""/>
            {!loading?
            <>
                <form action="/hoje" onSubmit={handleSubmit}>
                    <input name="email" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    <input name="password" type="password" placeholder="senha" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    <button>Cadastrar</button>
                </form>
                <Link to="/cadastro"><p>Já tem uma conta? Faça login!</p></Link>
            </>
                :
            <>
                <form action="/hoje" onSubmit={handleSubmit}>
                    <input name="email" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} disabled/>
                    <input name="password" type="password" placeholder="senha" value={password} onChange={(e)=>setPassword(e.target.value)} disabled/>
                    <button disabled>{carregamento}</button>
                </form>
                <Link to="/cadastro"><p>Já tem uma conta? Faça login!</p></Link>
            </>
            }
        </LoginContainer>
    )
}


export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    padding: 20% 10%;
    box-sizing: border-box;
    img{
        height: 35%;
        margin-bottom: 15%;
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
    }
    p{
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`