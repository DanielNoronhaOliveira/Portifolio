import styled from "styled-components";

export const Container = styled.div`
 background-color: #000000;
 display: flex;
 //flex-direction: column;
 justify-content: center;
 padding-top: 110px;
 text-align: center;
 flex-wrap: wrap; /* Permite quebra de linha quando o espaço for reduzido */

 img{
  width: 200px;
    border-radius: 100%;
    border: 2px solid chartreuse;
   
 }

 h1{
  color: #228B22;
  font-size: 60px;
  background-color: #000000;
 }
 

 p{
  color: #ffffff;
  font-size: 30px;
 }

 .botao-saiba-mais{
  background: #228B22;
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  color: #ffffff;
  margin: 30px;
  cursor: pointer;
  padding-top: 15px;
  text-decoration: none;
  
 }

 .botao-saiba-mais:hover{
    background: #32CD32;
  }

  /* Media query para telas menores */
  @media (max-width: 768px){
    padding-top: 100px;

    h1{
      font-size: 40px;
    }
    
    p{
      font-size: 24px;
    }

    button{
      width: 150px;
      height: 35px;
      font-size: 18px;
    }
  }

  @media (max-width: 480px){
    padding-top: 60px;

    h1{
      font-size: 30px;
    }

    p{
      font-size: 20px;
    }

    button{
      width: 130px;
      height: 30px;
      font-size: 16px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction:column;
  gap: 20px;
  margin-left: 20px;
  background-color: #000000;

  h1{
    background-color: #000000;
    margin-top:30px;
  }

  h3{
  background-color: #000000;
  color: #ffffff;
  
 }

  p{
    background-color: #000000
  }

   /* Centraliza o conteúdo em telas menores */
   @media (max-width: 768px) {
    margin-left: 0;
    align-items: center;
  }
`

