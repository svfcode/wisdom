export default (props) => {
  const { img1, img2, img3 } = props.imgs
  return (
    <div>
      <div id={props.name} className="carousel carousel-dark slide" data-bs-ride="carousel">

        <ol className="carousel-indicators">
          <li data-bs-target={'#' + props.name} data-bs-slide-to="0"></li>
          <li data-bs-target={'#' + props.name} data-bs-slide-to="1"></li>
          <li data-bs-target={'#' + props.name} data-bs-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">

          <div className="carousel-item active" data-bs-interval="2000">
            <img src={img1} className="d-block w-100" alt="..." />
          </div> {/* end carousel-item div */}
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img3} className="d-block w-100" alt="..." />
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