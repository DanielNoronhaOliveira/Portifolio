import { Container } from "./styles"
import pdf from '../../assets/daniel.pdf'
import { ButtonContainer } from "../../components"

export function Curriculo(){
    return(
        <Container>
             <h1>Bem vindo(a) a tela do meu curriculo!</h1>  
           
                
             
             <a  href={pdf}>Baixar curriculo</a>
              <ButtonContainer/>
            
        </Container>
    )
}