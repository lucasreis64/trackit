import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import Swal from "sweetalert2"
import {carregamento, dias, urlHabitos} from "../../Auxiliares/constants"
import { contexto } from "../../Context/Context"
import Dia from "./Dia"

export default function NovoHabito({habitos, setAddHabito, nomeHabito, setNomeHabito, diasSelecionados,setDiasSelecionados}) {
    const [atualizar, setAtualizar] = useState(false)
    const {userInfo} = useContext(contexto)
    const [carregando, setCarregando] = useState(false)
    
    function postHabito () {

            const novoHabitoPost = axios.post(urlHabitos, {
                name: nomeHabito,
                days: diasSelecionados
            }, 
            {
                headers: {
                    'Authorization': `Bearer ${userInfo.token}`
                }
            })
            novoHabitoPost.then((response)=>{setAddHabito();setDiasSelecionados([]);setNomeHabito('');setCarregando(false)})
            novoHabitoPost.catch((response=>{
                setCarregando(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Seu hábito não foi criado!',
                    footer: 'Tente novamente!'
                })
            }))
    }

    function handleSubmit (event) {
        event.preventDefault()
        if (diasSelecionados.length===0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Seu hábito não foi criado!',
                footer: 'Selecione ao menos um dia da semana!'
            })
            
            return
        }
        postHabito()
        setCarregando(true)
    }

    return (
        <NovoHabitoDiv>
            {carregando?
            <form onSubmit={handleSubmit}>
                <input disabled placeholder="nome do hábito" value={nomeHabito} onChange={(e)=>setNomeHabito(e.target.value)} required/>
                <div className="dias">{dias.map((d,idx)=><Dia carregando={carregando} setAtualizar={setAtualizar} setDiasSelecionados={setDiasSelecionados} atualizar={atualizar}
                key={idx} dias={dias} diasSelecionados={diasSelecionados} idx={idx}>{d}</Dia>)}</div>
                <div className="botoes"><p>Cancelar</p><button disabled><div>{carregamento}</div></button></div>
            </form>
            :
            <form onSubmit={handleSubmit}>
                <input placeholder="nome do hábito" maxLength={28} value={nomeHabito} onChange={(e)=>setNomeHabito(e.target.value)} required/>
                <div className="dias">{dias.map((d,idx)=><Dia setAtualizar={setAtualizar} setDiasSelecionados={setDiasSelecionados} atualizar={atualizar}
                key={idx} dias={dias} diasSelecionados={diasSelecionados} idx={idx}>{d}</Dia>)}</div>
                <div className="botoes"><p onClick={()=>setAddHabito(false)}>Cancelar</p><button>Salvar</button></div>
            </form>
            }
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
        align-items: center;
        justify-content: center; 
        display: flex;
        div{
            width: 80%;
            display: flex;
            justify-content: center;
        }
    }
    p{
        font-size: 15.976px;
        color: #52B6FF;
    }
`