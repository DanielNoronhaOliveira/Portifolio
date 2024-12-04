import { Container, LinkContainer } from "./styles"

export function Header() {
    return (
        <Container>
            <LinkContainer>
                <a href="/projetos">Projetos</a>
                <a href="/servicos">Serviços</a>
                <a href="/curriculo">Curriculo</a>
                <a href="/contatos">Contatos</a>
            </LinkContainer>
            
        </Container>
    )
}