import { useNavigate } from "react-router";
import { ContainerButton } from "./styles";


export function ButtonContainer(){
    const navigate = useNavigate()
    return(
        <ContainerButton>
             <button onClick={() => navigate("/")}>Voltar para a tela principal</button>
        </ContainerButton>
    )
}