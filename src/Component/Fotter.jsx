import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from '../Assets/Image/amch.png'

function Fotter() {
  return (
    <>
      <footer id="footer" className=" "
       style={{backgroundColor:"whitesmoke"}}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <a className="navbar-brand ms-2 rounded" href="#">
                <img
                  src={Logo}
                  width="100"
               
                  alt=""
                  className="rounded"
                  style={{
                    background: 'transparent',
                  }}
                />
              </a>
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <p>
                  Kurunjibhag, Sullia, D.K., Karnataka - 574 327.
                    <br />
                    <strong>Phone:</strong> +91  9886437090<br />
                    <strong>Email:</strong> info@kvg.com<br />
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <FontAwesomeIcon icon={faTwitter} style={{ color: '', borderRadius: '50%', border: '1px solid white', padding: '5px' }} />
                    </a>
                    <a href="#" className="facebook">
                      <FontAwesomeIcon icon={faFacebook} style={{ color: '', borderRadius: '50%', border: '1px solid white', padding: '5px' }} />
                    </a>
                    <a href="#" className="instagram">
                      <FontAwesomeIcon icon={faInstagram} style={{ color: '', borderRadius: '50%', border: '1px solid white', padding: '5px' }} />
                    </a>
                    <a href="#" className="google-plus">
                      <FontAwesomeIcon icon={faSkype} style={{ color: '', borderRadius: '50%', border: '1px solid white', padding: '5px' }} />
                    </a>
                    <a href="#" className="linkedin">
                      <FontAwesomeIcon icon={faLinkedin} style={{ color: '', borderRadius: '50%', border: '1px solid white', padding: '5px' }} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="fa fa-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="fa fa-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="fa fa-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="fa fa-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="fa fa-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="fa fa-chevron-right"></i> <a href="#">Mutual funds</a></li>
                  <li><i className="fa fa-chevron-right"></i> <a href="#">F&O</a></li>
                  <li><i className="fa fa-chevron-right"></i> <a href="#">Stocks</a></li>
                  <li><i className="fa fa-chevron-right"></i> <a href="#">Marketing</a></li>
                  <li><i className="fa fa-chevron-right"></i> <a href="#">Pension schemes</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Team k.v.g contact you </p>
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>

              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container text-center">
          <div className="copyright text-center">
            &copy; Copyright <strong><span>K.v.g</span></strong>. All Rights Reserved
          </div>
         
        </div>


      </footer>
    </>
  );
}




export default Fotter
