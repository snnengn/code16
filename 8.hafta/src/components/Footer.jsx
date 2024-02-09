import React from 'react'

function Footer() {
  return (
    <>
    <div>
  <footer
          className="text-center text-lg-start bg-dark text-white sticky-bottom sticky-xxl-bottom"
          >
    <div className="container p-4 pb-0">

      <section className="">

        <div className="row">

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h4 className="text-uppercase mb-4 fw-bold text-success">
              LOREM.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
            <div>
            <img src="https://cdn.dsmcdn.com/frontend/web/assets/images/troy-logo-transparent.png" className="w-25 p-3" alt="" />
            <img src="https://cdn.dsmcdn.com/web/production/footer-master-card.png" className='w-25 p-3' alt="" />
            <img src="https://cdn.dsmcdn.com/web/production/footer-visa-black.png" className="w-25 p-3" alt="" />
            <img src="https://cdn.dsmcdn.com/web/production/footer-amex.png" className="w-25 p-3" alt="" />
            </div>
          </div>


          <hr className="w-100 clearfix d-md-none" />


          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 fw-bold">Lorem Store</h6>
            <p>
              <a className="nav-link">Biz Kimiz</a>
            </p>
            <p>
              <a className="nav-link">Kariyer</a>
            </p>
            <p>
              <a className="nav-link">İletişim</a>
            </p>
            <p>
              <a className="nav-link">Destek</a>
            </p>
          </div>


          <hr className="w-100 clearfix d-md-none" />


          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 fw-bold ">
              Yardım
            </h6>
            <p>
              <a className="nav-link">Hesabım</a>
            </p>
            <p>
              <a className="nav-link">Sıkça Sorulan Sorular</a>
            </p>
            <p>
              <a className="nav-link">İşlem Rehberi</a>
            </p>
            <p>
              <a className="nav-link">Yardım</a>
            </p>
          </div>


          <hr className="w-100 clearfix d-md-none" />


          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 ">
            <h6 className="text-uppercase mb-4 fw-bold">Iletişim</h6>
            <p><i className="fas fa-home me-3 "></i> Bursa, Türkiye</p>
            <p><i className="fas fa-envelope me-3"></i> lorem@ipsum.com</p>
            <p><i className="fas fa-phone me-3"></i> + 90 123 45 67</p>
            <p><i className="fas fa-print me-3"></i> + 90 123 45 67</p>
          </div>

        </div>

      </section>


      <hr className="my-3"/>

 
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">

          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3">
              © 2024 Copyright: 
              <a className="nav-link text-nowrap ps-1" href="https://mdbootstrap.com/">Lorem.</a>
            </div>

          </div>



          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

            <a
               className="btn btn-outline-light mx-1"
               role="button"
               ><i className="fab fa-facebook-f"></i></a>


            <a
               className="btn btn-outline-light mx-1"
               role="button"
               ><i className="fab fa-twitter"></i></a>


            <a
               className="btn btn-outline-light mx-1"
               role="button"
               ><i className="fab fa-google"></i></a>


            <a
               className="btn btn-outline-light  mx-1"
               role="button"
               ><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </section>
    </div>
  </footer>
</div>

    </>
  )
}

export default Footer