import styled from "styled-components";



export const Container = styled.div`
  background-color:#000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
 
  h1{
    background-color:#000000;
    color: #228B22;
    text-align: center;
    margin-top:20px;
   
}


`
export const Content = styled.div`
width: 100vw;
height: 100vh;
padding: 25px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 10px;
padding-bottom:35px;
background-color:#000000;
overflow: hidden;

 p {
    color: #ffffff;
    font-size: 30px;
    background-color:#000000;
    
}
a{
   color: #0000CD;
   text-decoration:none;
   background-color: #000000;
}





@media (max-width:630px){
    p{
        font-size: 20px;
    }

    
}


`
/*export const ContainerButton = styled.div`
background-color:#000000;
display: flex;
margin-top: 100px;
justify-content: center;
overflow: hidden;
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

`*/