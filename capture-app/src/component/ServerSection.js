import React from "react"
import clock from "../img/clock.png"
import diaghram from "../img/diaghram.svg"
import money2 from "../img/money2.png"
import teamwork from "../img/teamwork.svg"
import home3 from "../img/home3.png"
import {About, Description,  Image } from "../style"
import styled from "styled-components"

const ServerSection = () => {
    return(
      <Services>
          <Description>
              <h2> High <span> quality </span> Services</h2>
              <Cards>
                  <Card>
                     <div className="icon">
                      <img src={clock} alt=""></img>
                      <h3>Efficient</h3>
                     </div>
                     <p>lorem5</p>
                  </Card>
                  <Card>
                     <div className="icon">
                      <img src={teamwork} alt=""></img>
                      <h3>TeamWork</h3>
                     </div>
                     <p>lorem5</p>
                  </Card>
                  <Card>
                     <div className="icon">
                      <img src={diaghram} alt=""></img>
                      <h3>Diaphram</h3>
                     </div>
                     <p>lorem5</p>
                  </Card>
                  <Card>
                     <div className="icon">
                      <img src={money2} alt=""></img>
                      <h3>Afforable</h3>
                     </div>
                     <p>lorem5</p>
                  </Card>
              </Cards>
          </Description>
          <Image>
              <img src={home3} alt=""></img>
          </Image>
      </Services>
    )
}

const Services = styled(About)`
 h2{
     padding-bottom: 5rem;
 }
 p{
     width: 70%;
     padding: 2rem 0rem 4rem 0rem;
 }
`
const Cards = styled.div`
display: flex;
flex-wrap: wrap;

`

const Card = styled.div`
flex-basis: 20rem;
.icon{
    display: flex;
    align-items: center;
}
h3{
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
}
`
export default ServerSection;