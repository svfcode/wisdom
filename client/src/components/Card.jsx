import React from 'react'
import Slider from './Slider'

export default (props) => {
  return (




    <div class="card text-center m-2">
      <div class="card-header"> {props.cardName} </div>
      <div class="card-body">
        <h5 class="card-title"> {props.cardTitle} </h5>
        <p class="card-text"> {props.cardDescription} </p>

        <Slider name={props.name} />

        <a href="#" class="btn btn-primary mt-3">Посмотреть полный список</a>
      </div>
      <div class="card-footer text-muted"> {props.cardQuot} </div>
    </div>




  )
}