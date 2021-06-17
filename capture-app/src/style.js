import styled from "styled-components";

export const About = styled.div`
min-height: 70vh;
display: flex;
justify-content: space-between;
color: white;
align-items: center;
padding: 4rem 5rem 6rem;
@media(max-width: 1300px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
     }

`
export const Description = styled.div`
flex: 1;
padding-right: 5rem;

h2{
    font-weight: lighter;
}
`
export const Image =  styled.div`
flex: 1;
overflow: hidden;
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`
export const Hide = styled.div`
overflow: hidden;
`