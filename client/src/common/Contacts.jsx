import React from 'react'
const axios = require('axios')

export default () => {
  const sendMsg = (event) => {
    axios.get('http://192.168.0.104:5003/api')
      .then(response => console.log("response", response.data))
  }

  return (
    <section className="container mt-5">
      <div className="card w-100">
        <div className="card-body">
          <div className="row">
            <h1>Мои контакты</h1>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav flex-column">
                <li className="nav-item border border-1 rounded w-100 mt-1">
                  <a className="nav-link" aria-current="page" href="mailto:klimovcode@mail.ru">klimovcode@mail.ru</a>
                </li>
                <li className="nav-item border border-1 rounded w-100 mt-1">
                  <a className="nav-link" href="https://github.com/KlimovCode">GitHub</a>
                </li>
                <li className="nav-item border border-1 rounded w-100 mt-1">
                  <a className="nav-link" href="tel:+79228799278">+7 (922) 879-992-78</a>
                </li>
                <li className="nav-item border border-1 rounded w-100 mt-1">
                  <a className="nav-link" href="skype:68016d85b4c16987?chat">Skype</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <div className="container h-100">
                <div className="row">
                  <h4>Напишите мне сообщение</h4>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-floating mt-1">
                      <input type="text" className="form-control" id="floatingInput" placeholder="Иванов Иван" />
                      <label htmlFor="floatingInput" className="mx-3">Ваше имя</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-floating mt-1">
                      <input type="email" className="form-control" id="floatingPassword" placeholder="name@example.com" />
                      <label htmlFor="floatingPassword" className="mx-3">Ваша почта</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-floating mt-1 h-100">
                    <textarea className="form-control h-100" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea" className="mx-3">Ваше сообщение</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button type="button" className="btn btn-success mt-1 w-100" onClick={sendMsg}>Отправить</button>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


    </section>
  )
}