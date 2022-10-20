import styled from "styled-components";
import { urlSignUp } from "../../Auxiliares/constants";
import { useNavigate } from "react-router-dom";
import logo from "../../img/TrackIt-Logo.jpg"
import axios from "axios";

export default function Login() {
    const navigate = useNavigate()

    function handleSubmit (event) {
        event.preventDefault();
        const login = axios.post(urlSignUp)
        login.then(()=>navigate("/hoje"))
        login.catch((response)=>console.log(response.response))
    }
    
    return (
        <LoginContainer>
            <img src={logo} alt= ""/>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email"/>
                <input placeholder="senha"/>
                <button>Entrar</button>
            </form>
            <p>Não tem uma conta? Cadastre-se!</p>
        </LoginContainer>
    )
}


const LoginContainer = styled.div`
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