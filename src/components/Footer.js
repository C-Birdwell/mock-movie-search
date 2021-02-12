import React from 'react'

export const Footer = () => {
  let paginationLink = []
  for (let i = 1; i < 6; i++) {
    paginationLink.push(`${i}`)
  }

  const paginationMap = paginationLink => {
    return (
      <div className="footer__pagination__row">
        <a className="footer__pagination__link" href="/">
          &#60;
        </a>
        {paginationLink.map((val, i) => (
          <a key={`pagination-${i}`} className="footer__pagination__link" href="/">
            {val}
          </a>
        ))}
        <a className="footer__pagination__link" href="/">
          &#62;
        </a>
      </div>
    )
  }

  return <footer className="footer">{paginationMap(paginationLink)}</footer>
}
