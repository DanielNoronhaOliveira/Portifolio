import { useNavigate } from "react-router";
import { Container } from "./styles";


export function ButtonContainer(){
    const navigate = useNavigate()
    return(
        <Container>
             <button onClick={() => navigate("/")}>Voltar para a tela principal</button>
        </Container>
    )
}