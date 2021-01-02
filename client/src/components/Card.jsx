import React from 'react'
import Slider from './Slider'

export default (props) => {
  return (
    <>
      <div id={props.name} className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.cardTitle}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{props.cardDescription}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Свернуть</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card text-center m-2">
        <div className="card-header"> {props.cardName} </div>
        <div className="card-body">
          <h5 className="card-title"> {props.cardTitle} </h5>
          <p className="card-text"> {props.cardDescription} </p>

          <Slider name={props.name} imgs={props.imgs} />

          <a href="#" className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target={'#' + props.name}>
            Посмотреть полный список
          </a>
        </div>
        <div className="card-footer text-muted"> {props.cardQuot} </div>
      </div>
    </>
  )
}