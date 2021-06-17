import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom"
import athlete1 from "../img/athlete.png"
import goodtime1 from "../img/goodtimes1.png"
import therace1 from "../img/therace1.png"
import { motion  } from  "framer-motion";
import {pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer} from "../animation"
import ScrollTop from "../component/ScrollTop"

const OurWork = () => {
    return(
        <Work style={{background: '#ffff'}} exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
           <motion.div variants={sliderContainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie >
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                    <motion.img variants={photoAnim} src={athlete1} alt="athlete"></motion.img>
                    </Hide>
                
                </Link>
            </Movie>
            <Movie >
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div className="line"></motion.div>
                <Link to="/work/therace">
                <motion.img variants={photoAnim} src={therace1} alt="therace"></motion.img>
                </Link>
            </Movie>
            <Movie >
                <motion.h2 variants={fade}>The Good Times</motion.h2>
                <motion.div className="line"></motion.div>
                <Link to="/work/good-time">
                <motion.img variants={photoAnim} src={goodtime1} alt="goodtime"></motion.img>
                </Link>
            </Movie>
            <ScrollTop/>
        </Work >
    )
}

const Work = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;

 h2{
     padding: 1rem 0rem;
     color: black;
     
 }
`
const Movie = styled.div`
padding-bottom: 10rem;

 .line{
   height: 0.5rem;
   background: #23d999;
   margin-bottom: 3rem;
 }
  img{
      width: 100%;
      height: 80vh;
      object-fit: cover;
  }
`
const Hide = styled.div`
overflow: hidden;
`

const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top: 10%;
width: 100%;
height: 100vh;
background: #fffebf;
z-index: 1;

`
const Frame2 = styled(Frame1)`
background: #ff8efb;
`
const Frame3 = styled(Frame1)`
background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
background: #8effa0;
`

export default OurWork;