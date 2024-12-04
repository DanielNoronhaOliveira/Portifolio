import styled from "styled-components";

export const Container = styled.div`
 max-width: 100%;
 background: #fff;

`

export const LinkContainer = styled.div`
 background-color: #228B22;
 display: flex;
 gap: 250px;
 flex-wrap: wrap;
 justify-content: center;
 
 a{
 background-color: #228B22;
 color: #ffffff;
 text-decoration: none;
 font-size: 30px;
 margin: 15px;
 //padding: 10px 20px;
 
 }

 /* Media queries para ajustar em telas menores */
 @media (max-width: 768px) {
  gap: 50px;

  a{
    font-size: 24px;
    margin: 10px;
  }
 }

 @media (max-width: 480px){
  gap: 20px;

  a{
    font-size: 18px;
    margin: 5px;
    pad: 8px 15px;
  }
 }
`