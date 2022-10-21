import styled from "styled-components"
import { dias, lixeira } from "../../Auxiliares/constants"


export default function CardHabito({habitos}) {
    return (
        <CardHabitoDiv>
            <h2>{habitos.name}</h2>
            <div className="dias">{dias.map((d,idx)=><Dias key={idx} dias={habitos.days} idx={idx}>{d}</Dias>)}</div>
            <img alt="" src={lixeira}/>
        </CardHabitoDiv>
    )
};

export const CardHabitoDiv=styled.div`
    width: 100%;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;
    font-size: 19.976px;
    color: #666666;
    position: relative;
    .dias{
        display: flex;
        gap:2px;
        justify-content: start;
    }
    img{
        position: absolute;
        top: 10px;
        right: 10px;
        height: 15px;
        width: 15px;
    }
`

export const Dias=styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center!important;;
    align-items: center;
    background: ${({dias, idx})=>(dias!==undefined && dias.includes(idx))?"#CFCFCF":'white'};
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    font-size: 19.976px;
    color: ${({dias, idx})=>(dias!==undefined && dias.includes(idx))?'white':"#CFCFCF"};

`