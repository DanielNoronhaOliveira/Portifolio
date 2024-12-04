

import { ButtonContainer } from "../../components/ButtonContainer";
import { Container, Content, Hamburgueria, Conversor, Calculadora, Cronometro, Jokenpo, Filmes } from "./styles";



export function Projetos() {
    return (
        <Container>
            <h1>Meus Projetos</h1>

            <Content>
                <Hamburgueria>
                    <h1>Dev Burguer</h1>
                    <p>Esse é o projeto devBurguer, um sistema de hamburgueria feito com JAVASCRIPT e varias bibliotecas, no front-end foi usado o VITE para criar o sistema. No back-end foi usado o NODEMON para monitorar alterações no codigo, o CONTAINER DOCKER para armazenar os containers e o express. Essa interface alem do usuario o aministrador tambem poder ter acesso, onde ele vai logar como administrador e fazer alterações.</p>
                    <a href="https://devburger-hamb.netlify.app/" target="_blank">Clique aqui para ver o projeto</a>
                </Hamburgueria>
                <Conversor>
                    <h1>Conversor de moedas</h1>
                    <p>Esse é um projeto de um conversor de moedas feito com html, css e javascript o intuito  é converter moedas como dolar, libra, euro e real, o conversor tem uma interface simples com campos que permitem ao usuário inserir um valor a ser convertido, selecionar a moeda de origem e a moeda de destino. </p>
                    <a href="https://danielnoronhaoliveira.github.io/conversor-de-moedas/"
                        target="_blank">Clique aqui para ver o projeto</a>
                </Conversor>
                <Calculadora>
                    <h1>Calculadora</h1>
                    <p>Este código é um projeto de uma calculadora simples baseada em HTML, CSS e JAVASCRIPT.  O corpo contém um contêiner principal com um título calculadora, uma área para exibir os resultados, e uma tabela de botões que representam números, operadores matemáticos e comandos como limpar, apagar e calcular.</p>
                    <a href="https://danielnoronhaoliveira.github.io/calculadora/"
                        target="_blank">Clique aqui para ver o projeto</a>
                </Calculadora>
                <Cronometro>
                    <h1>cronômetro</h1>
                    <p>O código implementa um cronômetro funcional que exibe o tempo no formato HH:MM:SS. Ele possui botões para iniciar, pausar e reiniciar, A lógica em JavaScript utiliza contadores para rastrear segundos, minutos e horas, uma função para garantir que os valores sejam exibidos com dois dígitos e funções para iniciar, pausar e reiniciar o cronômetro.  </p>
                <a href="https://danielnoronhaoliveira.github.io/cronometro/"
                    target="_blank">Clique aqui para ver o projeto</a>
                </Cronometro>
                <Jokenpo>
                    <h1>jokenpô</h1>
                    <p> Esse é um projeto de  um jogo de pedra, papel e tesoura entre um jogador humano e a máquina. Ele usa seletores para manipular elementos HTML que exibem o resultado do jogo e os pontos acumulados de cada participante. O placar do humano e do robô começa em zero e é atualizado conforme o jogo avança.</p>
                <a  href=" https://danielnoronhaoliveira.github.io/jokenpo/" target="_blank">Clique aqui para ver o projeto</a>
                </Jokenpo>
                <Filmes>
                    <h1>Dev Movies</h1>
                    <p>Esse projeto é de uma plataforma de filmes e series desenvolvida com REACT e ultilizado o VITE para criar a estrutura front-end, além disso foi utilizado o axios, react-router-dom, react-dom, swiper e para fazer a estilização foi utilizado o styled-components entre outros. Esse projeto estar apenas para computador, não foi feito a responsividade para dispositivos movel. </p>
                    <a href="https://playfilmes.netlify.app/" target="_blank">Clique aqui para ver o projeto</a>
                </Filmes>
            </Content>
            <div className="botaoProjeto">
                <ButtonContainer />
           </div>
        </Container>
    )
}