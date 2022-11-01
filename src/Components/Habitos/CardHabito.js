import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import Swal from "sweetalert2"
import { deslizarEsquerda } from "../../Auxiliares/animations"
import { dias, lixeira } from "../../Auxiliares/constants"
import { contexto } from "../../Context/Context"


export default function CardHabito({habitos, getHabitos}) {
    const {userInfo, noturno} = useContext(contexto)
    function deletarHabito (id) {
        Swal.fire({
            title: 'Você tem certeza?',
            text: "A ação não poderá ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, quero excluir!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Excluido!',
                    'Seu hábito foi deletado.',
                    'success'
                )
                deletarHabito()
            }
            else return
        })
        function deletarHabito () {
            const delet = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${userInfo.token}`
                }
            }
            )
            delet.then(()=>{
                console.log('deu bom')
                getHabitos()
            })
            delet.catch(()=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Seu hábito não foi excluído!',
                    footer: 'Tente novamente!'
                })
            })
        }
    }

    return (
        <CardHabitoDiv noturno={noturno}>
            <h2>{habitos.name}</h2>
            <div className="dias">{dias.map((d,idx)=><Dias key={idx} dias={habitos.days} idx={idx}>{d}</Dias>)}</div>
            <img onClick={()=>deletarHabito(habitos.id)} alt="" src={lixeira}/>
        </CardHabitoDiv>
    )
};

export const CardHabitoDiv=styled.div`
    width: 100%;
    height: 91px;
    background-color: ${props=> props.noturno?'#A9A9A9':'white'}!important;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;
    font-size: 19.976px;
    color: #666666;
    position: relative;
    animation: ${deslizarEsquerda} 1s 1;
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