import React from 'react'
import { NavLink } from 'react-router-dom'
import useScrollPosition from '@react-hook/window-scroll'

export const Header = () => {
  const scrollY = useScrollPosition()
  const transition = scrollY > 0 ? ' header--scrolled' : ''

  return (
    <header className={`header${transition}`}>
      <div className="row">
        <NavLink to="/" exact={true} className="header__title__link">
          <h1 className="header__title">Mock Movie Search</h1>
        </NavLink>
        <nav role="navigation">
          <ul className="header__navigation__ul">
            <li className="header__navigation__ul__li">
              <NavLink to="/about" activeClassName="is-active">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__search_wrapper">
        <div className="header__search__container">
          <input className="header__search__input" value="Godzilla" disabled />
          <button className="header__search__button">Search</button>
        </div>
      </div>
    </header>
  )
}
