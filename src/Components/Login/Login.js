import styled from "styled-components";
import logo from "../../img/TrackIt-Logo.jpg"
export default function Login(params) {
    return (
        <>
            <LoginContainer>
                <img src={logo} alt= ""/>
                <form>
                    <input/>
                    <input/>
                    <button/>
                </form>
                <p>Não tem uma conta? Cadastre-se!</p>
            </LoginContainer>
        </>
    )
};


const LoginContainer = styled.div`

`