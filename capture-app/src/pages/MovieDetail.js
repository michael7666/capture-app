import React, {useState, useEffect} from  "react"
import styled from "styled-components"
import {useHistory} from  "react-router-dom"
import {MovieState} from "../MovieState"
import { motion  } from  "framer-motion";
import {pageAnimation} from "../animation"


const MovieDetails = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0])
    },[movies, url])
    
    return(
        <>
        {movie && (
          <Details exit="exit" variants={pageAnimation} initial= "hidden" animate="show" >
          <HeadLine>
              <h2>{movie.title}</h2>
              <img src={movie.mainImg} alt="movies"></img>
          </HeadLine>
          <Award>
              {movie.awards.map((award) =>(
                  <Awards title={award.title} description={award.description} key={award.title}/>
              ))}
          </Award>
          <ImageDisplay>
              <img src={movie.secondaryImg} alt="movies"></img>
          </ImageDisplay>
      </Details >
        )}
    </>
    )

}

const Details = styled(motion.div)`
color: white;

`


const HeadLine = styled.div`
 min-height: 90vh;
 padding-top: 20vh;
 position: relative;

  h2{
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%)
  }
  img{
    width: 90%;
    height: 70vh;
    object-fit: cover;
}
`

const Award = styled.div`
 min-height: 80vh;
 display: flex;
 align-items: center;
 justify-content: space-around;
 margin: 5rem 10rem;
`

const StyledAward = styled.div`
padding: 5rem;

 h3{
     font-size: 2rem;
 }
 .line{
     width: 100%;
     height: 0.5rem;
     margin: 1rem 0rem;
     background: #23d997;
 }
  p{
      padding: 2rem 0rem;
  }
`

const ImageDisplay = styled.div`
min-height: 50vh;
img{
    width: 80%;
    height: 80vh;
    object-fit: cover;
}

`

const Awards = ({title, description}) => {
    return(
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    )
}

export default MovieDetails