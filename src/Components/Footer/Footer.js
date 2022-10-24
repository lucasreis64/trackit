import styled from "styled-components"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { contexto } from "../../Context/Context";
import { Link } from "react-router-dom";


export default function Footer() {
    const {porcentagem, visibilidade} = useContext(contexto)

    return (
        <>
            {visibilidade?
                <FooterContainer>
                    <Link to="/habitos"><p>Hábitos</p></Link>
                    <Link to="/hoje"><div><Progresso backgroundPadding={6} value={porcentagem} background={true} text={`Hoje`} styles={buildStyles(stylesProgresso)}/></div></Link>
                    <Link to="/historico"><p>Histórico</p></Link>
                </FooterContainer>
                :
                <>
                </>
            }
        </>
    )
};

const FooterContainer=styled.div`
    position: fixed;
    bottom:0;
    width: inherit;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    z-index: 1;
    p{
        color: #52B6FF;
        font-size: 18px;
    }
    div{
        width: 91px;
        height: 91px;
        margin-bottom: 40px;
    }
    .CircularProgressbar-path {
        stroke: white !important;
    }
`
const Progresso=styled(CircularProgressbar)`
`

const stylesProgresso=
{
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 1,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'round',

    // Text size
    textSize: '18px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    textColor: 'white',
    trailColor: '#52B6FF',
    backgroundColor: '#52B6FF'
}