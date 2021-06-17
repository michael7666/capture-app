import React from "react";
import home3 from "../img/home3.png"
// import styled from "styled-components"
import {About, Description, Hide, Image } from "../style"
import {motion} from "framer-motion";
import {titleAnim, fade, photoAnim} from "../animation"




const AboutSection = () => {
    return(
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                     <motion.h2 variants={titleAnim}>We Work together</motion.h2>
                    </Hide>
                    <Hide>
                     <motion.h2 variants={titleAnim}>Your <span>Dreams</span> come </motion.h2>
                    </Hide>
                    <Hide>
                     <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact Us we have alot of professionals to handler your project.</motion.p>

                < motion.button variants={fade}>Contact Us</ motion.button>
            </Description>
            <Image>
            <motion.img variants={photoAnim} src={home3} alt="Good to know"></motion.img>
            </Image>
        </About>
    )
}



export default AboutSection