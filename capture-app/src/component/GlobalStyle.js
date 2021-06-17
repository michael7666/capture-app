import {createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle `

 *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
 }
 html{
     @media(max-width: 1700px){
         font-size: 80%;
     }
 }
body{
    background: #1c1c1c;
    font-family: 'Inter', sans-serif;
  /* font-family: 'Lobster', cursive; */
  overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    transition: all 0.5s ease;
    background: transparent;
    color: white;
    font-family: 'Inter', sans-serif; 
    &:hover{
        background: #23d997;
        color: white;
    }
   
}
 h2{
        font-weight: lighter;
        font-size: 4rem;
        color: white
    }
    h3{
        color: white;
    }
    span{
        font-weight: bold;
        color:#23d997;
    }
    a{
        font-size: 1.1rem
    }
    p{
        padding: 3rem 0rem;
        color: #cccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    img{
        width: 40px;
        background: green
    }

`

export default GlobalStyle