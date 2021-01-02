import React from 'react'
import Card from './Card'
import {
  getStudyImg, getSkillsImg, getExperienceImg,
  getStudyTxt
} from '../assets/exportAssets'

export default () => {
  return (
    <main className="mt-5">
      <div className="container text-center d-flex flex-wrap justify-content-center">

        <Card name="study"
          cardName="Обучение"
          cardQuot="Чтобы много иметь надо много знать, для этого нужно много учиться."
          cardTitle="База знаний"
          cardDescription="Перечисленны информационные материалы на которых основана моя компетенция."
          imgs={getStudyImg()}
          list={getStudyTxt()} />

        <Card name="experience"
          cardName="Опыт"
          cardQuot="Самый хороший учитель в жизни — опыт.
          Берет, правда, дорого, но объясняет доходчиво."
          cardTitle="Выполненые работы"
          cardDescription="Результаты труда - показатель состоятельности специалиста."
          imgs={getExperienceImg()}
          list={getStudyTxt()} />

        <Card name="skills"
          cardName="Тенологии"
          cardQuot="Каждой работе - свой инструмент."
          cardTitle="Технологии которыми владею"
          cardDescription="Перечислен технологический стек."
          imgs={getSkillsImg()}
          list={getStudyTxt()} />
      </div>
    </main>
  )
}