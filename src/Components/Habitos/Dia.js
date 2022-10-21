import { Children } from "react";
import styled from "styled-components";

export default function Dia({dias,diasSelecionados,setDiasSelecionados,idx,atualizar,setAtualizar,children}) {
    function pintarDia (indice) {
        if(diasSelecionados.includes(dias[indice])){
            const diasCopy=diasSelecionados
            diasCopy.splice(indice,1)
            console.log(diasCopy)
            setDiasSelecionados(diasCopy)
            setAtualizar(!atualizar)
        }
        else{
            const diasCopy=diasSelecionados
            diasCopy.push(dias[indice])
            console.log(diasCopy)
            setDiasSelecionados(diasCopy)
            setAtualizar(!atualizar)
        }
    }
    
    return (
        <DiaDiv atualizar={atualizar} onClick={()=>pintarDia(idx)} dias={dias} diasSelecionados={diasSelecionados} idx={idx}>{children}</DiaDiv>
    )
};


const DiaDiv=styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center!important;;
    align-items: center;
    background: ${({dias, diasSelecionados, idx})=>(diasSelecionados.includes(dias[idx]))?"#CFCFCF":'white'};
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    font-size: 19.976px;
    color: ${({dias, diasSelecionados, idx})=>(diasSelecionados.includes(dias[idx]))?'white':"#CFCFCF"};
    margin-bottom: 30px;
`
