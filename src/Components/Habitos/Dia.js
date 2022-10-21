import styled from "styled-components";

export default function Dia({dias,diasSelecionados,setDiasSelecionados,idx,atualizar,setAtualizar,children}) {
    function pintarDia (indice) {
        if(diasSelecionados[indice]===dias[indice]){
            const diasCopy=diasSelecionados
            diasCopy[indice]=''
            console.log(diasCopy)
            setDiasSelecionados(diasCopy)
            setAtualizar(!atualizar)
        }
        else{
            const diasCopy=diasSelecionados
            diasCopy.push(indice)
            console.log(diasCopy)
            setDiasSelecionados(diasCopy)
            setAtualizar(!atualizar)
        }
    }
    
    return (
        <DiaDiv atualizar={atualizar} onClick={()=>pintarDia(idx)} diasSelecionados={diasSelecionados} idx={idx}>{children}</DiaDiv>
    )
};


const DiaDiv=styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center!important;;
    align-items: center;
    background: ${({diasSelecionados, idx})=>(diasSelecionados.includes(idx))?"#CFCFCF":'white'};
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    font-size: 19.976px;
    color: ${({diasSelecionados, idx})=>(diasSelecionados.includes(idx))?'white':"#CFCFCF"};
    margin-bottom: 30px;
`
