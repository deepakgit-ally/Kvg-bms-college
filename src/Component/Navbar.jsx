import React from 'react';
import { Link } from 'react-router-dom';
import Log from "../Assets/Image/amch.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <>
      {/* topBar */}
      <div className="hstack gap-3" style={{ backgroundColor: "#CCCCCC" }}>
  <div className="p-2 col-md-6 d-flex">
    <div className='col-md-3'>
      <p className='text-center'>
        <FontAwesomeIcon icon={faPhone} />
        <span className='ms-2'>08257 233208</span>
      </p>
    </div>
    <div className="social-links col-md-9">
      <a href="#" className="twitter">
        <FontAwesomeIcon icon={faTwitter} style={{ borderRadius: '50%', border: '1px solid white', padding: '5px' }} />
      </a>
      <a href="#" className="facebook">
        <FontAwesomeIcon icon={faFacebook} style={{ borderRadius: '50%', border: '1px solid white', padding: '5px' }} />
      </a>
      <a href="#" className="instagram">
        <FontAwesomeIcon icon={faInstagram} style={{ borderRadius: '50%', border: '1px solid white', padding: '5px' }} />
      </a>
      <a href="#" className="google-plus">
        <FontAwesomeIcon icon={faSkype} style={{ borderRadius: '50%', border: '1px solid white', padding: '5px' }} />
      </a>
      <a href="#" className="linkedin">
        <FontAwesomeIcon icon={faLinkedin} style={{ borderRadius: '50%', border: '1px solid white', padding: '5px' }} />
      </a>
    </div>
  </div>

  <div className="p-2 ms-auto">
    <Link to="/Registration" className='btn btn-primary rounded-pill'>Registration</Link>
  </div>

  <div className="vr"></div>

  <Link className="p-2 btn btn-primary rounded-pill" to="/" >Arrange Call</Link>
</div>

      {/* end top bar */}


      {/* navbar start */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm" style={{ backgroundImage: 'linear-gradient(to right, #AEAEAE(20%) , yellow(80%))' }}>
        <div className="container-fluid">
          <img src={Log} href="/" alt='Log' srcset="" className="navbar-brand w-25 h-25" />

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-lg-0 justify-content-center" style={{ marginLeft: "40%" }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#">Action</Link></li>
                  <li><Link className="dropdown-item" href="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" href="#">Course</Link></li>
              <li className="nav-item"><Link className="nav-link" href="#">Facilities</Link></li>
              <li className="nav-item"><Link className="nav-link" href="#">Events</Link></li>
              <li className="nav-item"><Link className="nav-link" href="#">Fee</Link></li>
              <li className="nav-item"><Link className="nav-link" href="#">Admission</Link></li>
              <li className="nav-item"><Link className="nav-link" href="#">Achievements</Link></li>
              <li className="nav-item"><Link className="nav-link" href="#">Gallery</Link></li>
              <li className="nav-item"><Link className="nav-link" href="#">Contact Us</Link></li>
            </ul>


          </div>
        </div>
      </nav>
    </>
  );
}
