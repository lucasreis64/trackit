import styled from "styled-components"
import lixeira from "../../img/lixeira.png"

export default function CardHabito({habitos}) {
    const dias=['D','S','T','Q','Q','S','S']
    return (
        <CardHabitoDiv>
            <h2>{habitos.name}</h2>
            <div>{dias.map((d,idx)=><Dias dias={habitos.dias} idx={idx}>{d}</Dias>)}</div>
            <img alt="" src={lixeira}/>
        </CardHabitoDiv>
    )
};

const CardHabitoDiv=styled.div`
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
    div{
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

const Dias=styled.div`
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