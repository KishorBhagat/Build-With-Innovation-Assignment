import styled from "styled-components"
import FormLogin from "../components/login/FormLogin"

function Login() {
  return (
    <StyledLogin>  
        <FormLogin />
    </StyledLogin>
  )
}

const StyledLogin = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px){
      padding: 20px;
    }
`

export default Login