import { ThreeDots } from "react-loader-spinner"
import lixeiraIcon from "../img/lixeira.png"

export const urlLogin = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'

export const urlSignUp = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'

export const urlHabitos = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

export const urlHoje = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

export const lixeira = lixeiraIcon

export const dias=['D','S','T','Q','Q','S','S']

export const diasSemana=['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

export const loadingCards = ['','','','','','','','']

export const carregamento =
                                <ThreeDots 
                                    height="80" 
                                    width="80" 
                                    radius="9"
                                    color="white" 
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                />

