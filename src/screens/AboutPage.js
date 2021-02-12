import React from 'react'

export const AboutPage = () => (
  <div className="screen__info">
    <h2>About This Project</h2>
    <p>
      This is a mock of a movie search site using the results from{' '}
      <a href="https://tmdb.apps.quintero.io/" target="_blank">
        https://tmdb.apps.quintero.io/
      </a>
    </p>
    <p>The site contains screens for a dashboard, about page, and 404 page.</p>
    <p>This site is built in React and utilizes SaSS for CSS styling.</p>
    <p>The query request for the mock results is:</p>
    <img src="./images/graphQL.png" />
  </div>
)
