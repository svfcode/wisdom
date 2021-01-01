import studyImg1 from '../assets/js-samurai.png'
import studyImg2 from '../assets/minin.png'
import studyImg3 from '../assets/freecodecamp.png'

export default (props) => {
  return (
    <div>
      <div id={props.name} className="carousel carousel-dark slide" data-bs-ride="carousel">

        <ol className="carousel-indicators">
          <li data-bs-target={'#' + props.name} data-bs-slide-to="0" className="active"></li>
          <li data-bs-target={'#' + props.name} data-bs-slide-to="1"></li>
          <li data-bs-target={'#' + props.name} data-bs-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">

          <div className="carousel-item active" data-bs-interval="2000">
            <img src={studyImg1} className="d-block w-100" alt="..." />
          </div> {/* end carousel-item div */}
          <div className="carousel-item" data-bs-interval="2000">
            <img src={studyImg2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={studyImg3} className="d-block w-100" alt="..." />
          </div>
        </div> {/* end carousel-inner div */}

        <a className="carousel-control-prev" href={'#' + props.name} role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href={'#' + props.name} role="button" data-bs-slide="next" data-bs-ride="carousel">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>

      </div> {/* end carousel div */}
    </div>
  )
}