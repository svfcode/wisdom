import React from 'react'
import Carousel from './Carousel'

export default () => {
  return (
    <main className="mt-5">


      <div className="container">
        <div className="row">

          <div class="card text-center">
            <div class="card-header">Обучение</div>
            <div class="card-body">
              <h5 class="card-title">База знаний</h5>
              <p class="card-text">
                Перечисленны информационные материалы на которых основана моя компетенция.
                Чтобы много иметь надо много знать, для этого нужно много учиться.
              </p>

              <Carousel />

              <a href="#" class="btn btn-primary">Посмотреть полный список</a>
            </div>
            <div class="card-footer text-muted">Обновленно 26.12.20</div>
          </div>

        </div>
      </div>

    </main>
  )
}