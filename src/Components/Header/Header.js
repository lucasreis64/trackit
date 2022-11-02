import styled from "styled-components"
import { useContext } from "react";
import { contexto } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import exit from "../../img/exit.png"
import { opacidade } from "../../Auxiliares/animations";

export default function Header() {
    const {visibilidade,userInfo, setUserInfo} = useContext(contexto)
    const navigate = useNavigate()
    return (
        <>
            {visibilidade?
                <HeaderContainer>
                    <p>TrackIt</p>
                    <div>
                        <img src={userInfo.image} alt=""/>
                        <img className='exit' src={exit} onClick={()=><>{localStorage.clear()};{setUserInfo({})};{navigate('/')}</>} alt=""/>
                    </div>
                </HeaderContainer>
                :
                <>
                </>
            }
        </>
    )
};

const HeaderContainer = styled.div`
    width: inherit;
    height: 70px;
    box-sizing: border-box;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-family: 'Playball';
    color: white;
    background-color: #126BA5;
    font-size: 39px;
    z-index: 1;
    animation: ${opacidade} 1s;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    top: 10%;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }
    @media (max-width: 600px) {
        top:0%;
        border-radius: 0;
    }
    img{
        border-radius: 50%;
        
        height: 51px;
        width: 51px;
    }
    .exit img{
        border-radius: none;
        height: 51px;
        width: 51px;
    }
`