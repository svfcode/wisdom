import React from 'react'

export default () => {
  return (
    <section className="container">
      <div class="card w-100">
        <div class="card-body">
          <h1>Мои контакты</h1>
          <div className="col-3">
            <ul class="nav flex-column">
              <li class="nav-item border border-1 rounded w-100 mt-1">
                <a class="nav-link" aria-current="page" href="mailto:klimovcode@mail.ru">klimovcode@mail.ru</a>
              </li>
              <li class="nav-item border border-1 rounded w-100 mt-1">
                <a class="nav-link" href="https://github.com/KlimovCode">GitHub</a>
              </li>
              <li class="nav-item border border-1 rounded w-100 mt-1">
                <a class="nav-link" href="tel:+79228799278">+7 (922) 879-992-78</a>
              </li>
              <li class="nav-item border border-1 rounded w-100 mt-1">
                <a class="nav-link" href="skype:68016d85b4c16987?chat">Skype</a>
              </li>
            </ul>
          </div>
          <div className="col-8">

          </div>
        </div>

      </div>


    </section>
  )
}