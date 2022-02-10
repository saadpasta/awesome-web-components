import React from 'react'
import './card.css'

function Card(props) {
  return (
      <div className="card">
          <Link to={props.link}>
              <div className="card-heading">{props.heading}</div>
              <div className="card-value">{props.value}</div>
          </Link>
      </div>
  )
}

export default Card;