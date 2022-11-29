import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div>
            
            <footer className="text-center text-lg-start footer">
                
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                   
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    
                </section>
             
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        
                        <div className="row mt-3">
                            
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Donate Now.
                                </h6>
                                <p>We are here to save your Life</p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                               
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Our Services
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Neraby Donors</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Blood Banks</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Hospitals</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Covid-19</a>
                                </p>
                            </div>
                          
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Login</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Book Appointment</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>
                        
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                               
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> India,Jhansi,Uttar Pradesh</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                          
                        </div>
                      
                    </div>
                </section>
                <div className="text-center p-4">
                    © 2022 Copyright:
                    <a className="text-reset fw-bold" href="/">RaktaDaan</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
