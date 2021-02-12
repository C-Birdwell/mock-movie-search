import React from 'react'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import moment from 'moment'

export const Card = ({ obj, delay }) => {
  const { details, title, rating, releaseDate } = obj
  const { genres, images } = details

  const formatDate = date => {
    const fmtDte = moment(date).format('MMMM Do YYYY')
    return fmtDte === 'Invalid date' ? 'Date Not Available' : fmtDte
  }

  const formatScore = score => {
    const fmtScr = score === 0 ? 'NR' : score

    const scoreColor = score => {
      if (score < 6 && score > 0) {
        return 'card__rating--low'
      } else if (score >= 6 && score < 7) {
        return 'card__rating--medium'
      } else if (score >= 7) {
        return 'card__rating--high'
      } else {
        return 'card__rating--null'
      }
    }

    return (
      <div className={`card__rating ${scoreColor(score)}`}>
        <p className="card__rating__score">{fmtScr}</p>
      </div>
    )
  }

  const formatGenres = genres => {
    const fmtGnr = genres.map((val, i) => (
      <p className="card__information__genres" key={releaseDate + i + title}>
        {val.name}
      </p>
    ))

    return <React.Fragment>{fmtGnr}</React.Fragment>
  }

  return (
    <Fade bottom delay={delay} duration={500}>
      <div className="card">
        <div className="card__wrapper">
          <p className="card__title">{title}</p>
          <p className="card__date">{formatDate(releaseDate)}</p>
          <div className="card__poster">
            <img
              className="card__poster__img"
              src={images.posters[0].image}
              alt={`poster for ${title}`}
            />
            <Flip right delay={delay + 100}>
              {formatScore(rating)}
            </Flip>
          </div>
          <div className="card__information">
            <p className="card__information__genres__key">Genres:</p>
            {formatGenres(genres)}
          </div>
        </div>
      </div>
    </Fade>
  )
}
