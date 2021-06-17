import React from "react"
import { motion  } from  "framer-motion";
import {pageAnimation, titleAnim} from "../animation"
import styled from "styled-components"

const ContactUs = () => {
    return(
        <ContactStyle style={{background: '#ffff'}} exit="exit"
         variants={pageAnimation}
          initial= "hidden" animate="show">
            <Title>
                <Hidden>
                    <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                </Hidden>
            </Title>
            <div>
                <Hidden>
                <Social variants={titleAnim}>
                <Circle/>
                <h2>Send Us A Message</h2>
                </Social>
                </Hidden>
                <Hidden>
                <Social variants={titleAnim}>
                <Circle/>
                <h2>Send An Email</h2>
                </Social>
                </Hidden>
                <Hidden>
                <Social variants={titleAnim}>
                <Circle/>
                <h2>Social Media</h2>
                </Social>
                </Hidden>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
 padding: 4rem 5rem;
 color: #353535;
 min-height: 90vh;
 h2{
     color: black;
 }
 
`
const Title = styled.div`
margin-bottom: 4rem;
color: black;
`
const Hidden = styled.div`
overflow: hidden;
`

const Circle = styled.div`
border-radius: 50%;
width: 3rem;
height: 3rem;
background: #353535;

`

const Social = styled(motion.div)`
display: flex;
align-items: center;
h2{
    margin: 3rem;
}
`

export default ContactUs;