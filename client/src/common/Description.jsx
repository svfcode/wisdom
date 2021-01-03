import React from 'react'

export default () => {
  return (
    <section className="container mt-5">
      <div className="card w-100">
        <div className="card-body">
          <h1>Приветствую! <br /> Меня зовут Сергей Климов, я веб-программист</h1>
          <p>
            Буду рад спроектировать и реализовать для вас лендинг, блог, магазин. На данный момент цены более чем демократичные.
          </p>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Вид работы</th>
                <th scope="col">Цена</th>
                <th scope="col">Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Лендинг</td>
                <td>900 рублей</td>
                <td>Продающая страница из трех-четырех блоков</td>
              </tr>
              <tr>
                <td>Блог</td>
                <td>1900 рублей</td>
                <td>Коллекция статей раскрывающих идеи автора, включает категории, меню, об авторе, контакты</td>
              </tr>
              <tr>
                <td>Магазин</td>
                <td>2900 рублей</td>
                <td>Коллекции товаров с перечеслением их характеристик, страница контактов для возможности заказа</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}