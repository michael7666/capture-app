import React from "react"
import AboutSection from "../component/AboutSection"
import ServicesSection from "../component/ServerSection"
import FaqSection from "../component/FaqSection"
import { motion  } from  "framer-motion";
import {pageAnimation} from "../animation"
import ScrollTop from "../component/ScrollTop"

const AboustUs = () => {
    return (
        < motion.div  exit="exit" variants={pageAnimation} initial= "hidden" animate="show">
          <AboutSection/>
          <ServicesSection/>
          <FaqSection/>
          <ScrollTop/>
        </motion.div>
    )
}

export default AboustUs