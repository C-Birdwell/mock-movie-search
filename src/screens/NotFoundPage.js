import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => (
  <div className="screen__info">
    <h2>404 Page Not Found</h2>
    <p>The url is incorrect. Please click on the link below to return Home.</p>
    <p>
      <Link to="/" exact={true}>
        Home
      </Link>
    </p>
  </div>
)
