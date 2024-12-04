import { Container, Content } from "./styles"
import daniel from "../../assets/daniel.jpg"
import { Header } from "../../components"

export function Home() {
    return (
        <>
         <Header/>
            <Container>
             
                
                <img src={daniel} alt="imagem da home" />
                <Content>
                <h1>Daniel Noronha</h1>
                <h3>Desenvolvedor fullstack</h3>
                    <h1>Sobre Mim!</h1>

                   
                    <p>Sou um desenvolvedor full stack com experiência e paixão por transformar ideias em soluções digitais funcionais e otimizadas. Minha base técnica inclui HTML, CSS e JavaScript, além de frameworks e bibliotecas modernas, como React e TypeScript, para criar interfaces dinâmicas e interativas. No back-end, trabalho com Node.js, oferecendo uma abordagem completa para desenvolvimento de aplicativos e sistemas escaláveis.

Além disso, tenho experiência com controle de versão usando Git e GitHub, colaborando de maneira eficiente em equipes ágeis e projetos em evolução constante. Sempre em busca de novas tecnologias e práticas de desenvolvimento, minha missão é unir funcionalidade e experiência do usuário, criando produtos que realmente fazem a diferença.</p>
                    
                </Content>
                <a className="botao-saiba-mais" href="/saiba-mais">Saiba mais</a>
                
            </Container>
        </>
    )
}

