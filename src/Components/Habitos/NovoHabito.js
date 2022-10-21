import { useState } from "react"
import styled from "styled-components"
import {dias} from "../../Auxiliares/constants"
import Dia from "./Dia"

export default function NovoHabito({habitos, setAddHabito}) {
    const [diasSelecionados,setDiasSelecionados] = useState([])
    const [atualizar, setAtualizar] = useState(false)
    
    function postHabito () {
        console.log('')
    }

    return (
        <NovoHabitoDiv>
            <input placeholder="nome do hábito" required/>
            <div className="dias">{dias.map((d,idx)=><Dia setAtualizar={setAtualizar} setDiasSelecionados={setDiasSelecionados} atualizar={atualizar}
            key={idx} dias={dias} diasSelecionados={diasSelecionados} idx={idx}>{d}</Dia>)}</div>
            <div className="botoes"><p onClick={()=>setAddHabito(false)}>Cancelar</p><button onClick={()=>postHabito()}>Salvar</button></div>
        </NovoHabitoDiv>
    )
};

const NovoHabitoDiv=styled.div`
    margin-top: 20px;
    width: 100%;
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
    input{
        width: 100%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 8px;
        box-sizing: border-box;
        padding-left: 10px;
    }
    input::placeholder{
        font-weight: 400;
        font-size: 20px;
        color: #DBDBDB;
        font-family: 'Lexend Deca';
    }
    .botoes{
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 20px;
    }
    button{
        width: 84px !important;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.65px;
        font-size: 15.976px !important;
    }
    p{
        font-size: 15.976px;
        color: #52B6FF;
    }
`