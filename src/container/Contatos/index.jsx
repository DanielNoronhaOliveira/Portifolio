//import { useNavigate } from "react-router";
import { ButtonContainer } from "../../components";
import { Container, Content } from "./styles";


export function Contatos() {
   // const navigate = useNavigate()
    return (
        <>
            <Container>
            <h1>Meus Contatos</h1>
                <Content>
                
                    <p >Linkedin: <a href="https://www.linkedin.com/in/daniel-noronha1/" target="_blank">https://www.linkedin.com/in/daniel-noronha1/</a></p>

                    <p >Whatsap: (84)9913-0021: <a href="https://wa.me/qr/ZN5ZO75RIUTCJ1" target="_blank">https://wa.me/qr/ZN5ZO75RIUTCJ1</a></p>

                    <p >Github: <a href="https://github.com/DanielNoronhaOliveira" target="_blank">https://github.com/DanielNoronhaOliveira</a></p>

                    <p >Email: <a href="noronha.daniel22@gmail.com" target="_blank">noronha.daniel22@gmail.com</a></p>

                    <p >Instagram: <a href="https://www.instagram.com/danielnoronhah15?igsh=Y2xhczB6MTIwZW5m" target="_blank">https://www.instagram.com/danielnoronhah15?igsh=Y2xhczB6MTIwZW5m</a></p>
                
                    <ButtonContainer/>
                  
                

                </Content>

            </Container>

        </>
    )
}