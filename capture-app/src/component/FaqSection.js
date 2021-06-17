import React from "react";
import styled from "styled-components"
import {About} from "../style"



const FaqSection = () => {
    return(
        <Faq>
            <h2>Any Question <span>FAQ</span></h2>
            <div  className="question">
                <h3>How Do I Start</h3>
                <div className="answer">
                    <p>lorem</p>
                       <p>fuck u</p> 
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h3>Daily Schedule</h3>
                <div className="answer">
                    <p>lorem</p>
                    <p>fuck u</p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h3>Diferent payment method</h3>
                <div className="answer">
                    <p>lorem</p>
                    <p>fuck u</p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h3>What Product Do You offere</h3>
                <div className="answer">
                    <p>lorem</p>
                    <p>fuck u</p>
                </div>
            </div>
            <div className="faq-line"></div>
        </Faq>
    )
}


const Faq = styled(About)`
display: block;

span{
    display: block;
}
h3{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding: 2rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;

    p{
        padding: 1rem 0rem;
    }
}
`

export default FaqSection