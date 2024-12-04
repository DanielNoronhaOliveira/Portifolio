import { ButtonContainer } from "../../components";
import { Container, Content } from "./styles";


export function Servicos(){
    return(
        <Container>
             <h1>Meus serviços</h1>
            <Content>
          
           <h2>Pacotes de Serviços</h2>
           <li>Básico: Desenvolvimento de sites estáticos simples.</li>
           <li>Intermediário: Sites com funcionalidades dinâmicas (ex.: blogs ou formulários).</li>
           <li>Avançado: Soluções fullstack completas com banco de dados, autenticação, etc.</li>

           <h2>Aplicações Web Personalizadas</h2>
            <li>Desenvolvimento de aplicações web interativas, como dashboards, sistemas de gestão ou ferramentas colaborativas.</li>
            <li>Integração com APIs externas para funcionalidades avançadas (ex.: sistemas de envio, autenticação, etc.).</li>
            <li>Criação de interfaces dinâmicas e intuitivas com React e TypeScript.</li>


           <h2>Tecnologias Utilizadas</h2>
           <li>Frontend: HTML, CSS, JavaScript, React, TypeScript, Styled-components.</li>
           <li>Backend: Node.js, Express, integração com APIs.</li>
           <li>Ferramentas de Deploy: Netlify.</li>
           <li>Versionamento: Git e GitHub para controle de código e colaboração.</li>

           <ButtonContainer/>
           </Content>
        </Container>
    )
}