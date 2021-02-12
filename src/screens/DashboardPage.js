import React, { useState, useEffect } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import Fade from 'react-reveal/Fade'

import { Card, Footer } from '../components'
import { cleanData, gridFromArray } from '../utils'
import { dataGodzilla } from '../data'

const mapRows = () => {
  const clean = cleanData(dataGodzilla)
  const onlyWidth = useWindowWidth()
  const chunkSize = onlyWidth >= 1200 ? 3 : 1
  const isDelay = onlyWidth >= 1200 ? 1 : 0
  const chunkClean = gridFromArray(clean, chunkSize)
  return (
    <React.Fragment>
      {chunkClean.map((val, i) => (
        <div className="row" key={`rows-result-${i}`}>
          {val.map((movie, j) => (
            <Card
              obj={movie.node}
              key={`${movie.node.title}-${j}`}
              delay={i * 100 + j * 200 * isDelay}
            />
          ))}
        </div>
      ))}
    </React.Fragment>
  )
}

export const DashboardPage = () => {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 300)
  }, [])
  return (
    <React.Fragment>
      <div className="screen__dashboard">{mapRows()}</div>
      <Footer />
    </React.Fragment>
  )
}
