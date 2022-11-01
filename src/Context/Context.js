import { createContext, useState } from "react"

export const contexto = createContext('')

export const Context = (props) => {
    const [userInfo, setUserInfo] = useState({})
    const [porcentagem, setPorcentagem] = useState(0)
    const [visibilidade, setVisibilidade] = useState(false)
    const [porcentagemT, setPorcentagemT] = useState('')
    const [respons, setRespons] = useState([])
    const [permanecerConectado, setPermanecerConectado] = useState(false)
    const [noturno, setNoturno] = useState(false)

    return (
        <contexto.Provider  value={{ noturno, setNoturno, userInfo, setUserInfo, porcentagem, setPorcentagem, visibilidade, setVisibilidade, porcentagemT, setPorcentagemT, respons, setRespons, permanecerConectado, setPermanecerConectado}}>
            {props.children}
        </contexto.Provider>
    )
}
