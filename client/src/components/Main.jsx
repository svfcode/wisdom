import React from 'react'
import Card from './Card'

export default () => {
  return (
    <main className="mt-5">


      <div className="container text-center">

          <div class="card text-center">
            <div class="card-header">Обучение</div>
            <div class="card-body">
              <h5 class="card-title">База знаний</h5>
              <p class="card-text">
                Перечисленны информационные материалы на которых основана моя компетенция.
                
              </p>

              <Card />

              <a href="#" class="btn btn-primary">Посмотреть полный список</a>
            </div>
            <div class="card-footer text-muted">Чтобы много иметь надо много знать, для этого нужно много учиться.</div>
          </div>

        </div>
     

    </main>
  )
}