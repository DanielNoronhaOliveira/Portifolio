import styled from "styled-components";

export const ContainerButton = styled.button`
  background-color:#000000;
display: flex;
margin-top: 100px;
justify-content: center;
overflow: hidden;
border: none;
  button{
    width: 300px;
    text-decoration: none;
    color: black;
    padding: 20px;
    border-radius: 40px;
    border: none;
   display: flex;
   justify-content: center;
   background-color:#228B22;
   color:#ffffff;
   font-size: 20px;
   overflow: hidden;
   
   cursor: pointer;
  
}
button:hover{
 background-color:#32CD32;
}

@media (max-width:500px){
    button{
        width: 150px;
        height: 60px;
        font-size: 12px;
       
    }
}

`