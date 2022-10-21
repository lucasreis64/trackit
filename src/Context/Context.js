import { createContext, useState } from "react"

export const contexto = createContext('')

export const Context = (props) => {
    const [userInfo, setUserInfo] = useState({})
    const [porcentagem, setPorcentagem] = useState(0)
    const [visibilidade, setVisibilidade] = useState(false)
    return (
        <contexto.Provider  value={{userInfo, setUserInfo, porcentagem, setPorcentagem, visibilidade, setVisibilidade}}>
            {props.children}
        </contexto.Provider>
    )
}
