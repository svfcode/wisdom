import React from 'react'
import Card from './Card'

export default () => {
  return (
    <main className="mt-5">
      <div className="container text-center d-flex flex-wrap justify-content-center">
        <Card name="study" cardName="Обучение"
          cardQuot="Чтобы много иметь надо много знать, для этого нужно много учиться."
          cardTitle="База знаний"
          cardDescription="Перечисленны информационные материалы на которых основана моя компетенция." />
        <Card name="experience" />
        <Card name="skills" />
      </div>
    </main>
  )
}