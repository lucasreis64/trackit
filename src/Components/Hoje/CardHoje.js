import dayjs from "dayjs"
import styled from "styled-components"
import check from "../../img/check.png"


const str = dayjs().format('DD/MM/YYYY')
let parts = str.split('/'),
    year = parseInt(parts[2], 10),
    month = parseInt(parts[1], 10) - 1,
    day = parseInt(parts[0], 10),
    date = new Date(year, month, day),
    dia = date.getDay();
console.log(dia)

console.log(day)
export default function CardHoje() {
    return (
        <CardHojeDiv>
            <div>
                <h1>Ler</h1>
                <h2>Sequência atual: 3 dias</h2>
                <h2>Seu recorde: 5 dias</h2>
            </div>
            <button>
                <img src={check} alt=""/>
            </button>
        </CardHojeDiv>
    )
};


const CardHojeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 94px;
    margin-top: 20px;
    background-color: white !important;
    align-items: center;
    box-sizing: border-box;
    padding: 0 12px;
    h1{
        font-size: 20px;
        color: #666666;
    }
    h2{
        font-size: 13px;
        color: #666666;
    }
    button{
        width: 69px!important;
        height: 69px!important;
        justify-content: center;
        align-items: center;
        background: #EBEBEB;
        img{
            margin-top: 2px;
        }
    }
`