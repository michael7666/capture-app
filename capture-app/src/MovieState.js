import athlete from "./img/athlete.png"
import athlete1 from "./img/athlete1.png"
import goodtime from "./img/goodtimes-small.png"
import goodtimes1 from "./img/goodtimes1.png"
import therace from "./img/therace.png"
import therace1 from "./img/therace1.png"



export const MovieState = () => {
    return [
        {
          title: 'The Athlete',
          mainImg: athlete1,
          secondaryImg: athlete,
          url: '/work/the-athlete', 
          awards:[
              {
                  title: 'Truly a mouth watering movie',
                  description: 'dont miss the movie you need to download it and watch it'
              },

              {
                title: "wonderfull movie",
                description: 'what a movie'

              },
              {
                  title: 'the experience is wonderfull',
                  description: "don't miss it"
              }

          ]
        },
      {
        title: 'The Good Time',
        mainImg: goodtimes1,
        secondaryImg: goodtime,
        url: '/work/good-time',
        awards: [
            {
                title: 'the movie haa won too many awards',
                description: 'what an experience'
            },
            {
                title: 'Good way to life',
                description: 'we all need to live that way'
            },
            {
                title: 'the world is turning around',
                description: 'we have to make sure we dont go with it'
            }

        ]
      },
      {
        title: 'The Racer',
        mainImg: therace1,
        secondaryImg: therace,
        url: '/work/therace',
        awards: [
            {
                title: 'A Good racing movie',
                description: 'A wonderfull movie'
            },
            {
                title: 'The Racing movie',
                description: 'One of the best movies in time if not the best.'
            },
            {
                title: 'Car Racing Movie',
                description: 'Such a wonderfull movie and i enjoyed it'
            }
        ]
      }
    ]
}