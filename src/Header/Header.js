import styled from "styled-components"
import { useContext } from "react";
import { contexto } from "../Context/Context";


export default function Header() {
    const {visibilidade,userInfo} = useContext(contexto)

    return (
        <>
            {visibilidade?
                <HeaderContainer>
                    <p>TrackIt</p>
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-QpBLXkhQU6hUhnE3dSEzWorcYYCS_DaKLPBuFZcK2bW_xKZPVCWKVJbDuQ1_6attrI&usqp=CAU'} alt=""/>
                </HeaderContainer>
                :
                <>
                </>
            }
        </>
    )
};

const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-family: 'Playball';
    color: white;
    background-color: #126BA5;
    font-size: 39px;
    img{
        border-radius: 50%;
        
        height: 51px;
        width: 51px;
    }
`