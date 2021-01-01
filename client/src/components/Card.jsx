import React from 'react'
import Slider from './Slider'

export default (props) => {
  return (
    <div className="card text-center m-2">
      <div className="card-header"> {props.cardName} </div>
      <div className="card-body">
        <h5 className="card-title"> {props.cardTitle} </h5>
        <p className="card-text"> {props.cardDescription} </p>

        <Slider name={props.name} imgs={props.imgs} />

        <a href="#" className="btn btn-primary mt-3">Посмотреть полный список</a>
      </div>
      <div className="card-footer text-muted"> {props.cardQuot} </div>
    </div>
  )
}