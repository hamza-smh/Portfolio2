import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import SectionTitle from '../SectionTitle/SectionTitle';
import {useTheme} from "../../context/theme";
import shape1 from "../../images/about/shape1.png";
import shape2 from "../../images/about/shape2.png";


const ContactArea = (props) => {
  const {themeMode, setThemeMode} = useTheme();
    return (
        <section className = {` section-padding ${props.contactclass, themeMode==="dark"?"wpo-contact-area-dark":"wpo-contact-area"}`} id = "contact" style={{position:"relative"}}>
          <div style = {{position: "absolute",pointerEvents: "none"}}>
              <div className="line-shape-1">
                  <img src={shape1} alt="" />
              </div>
              <div className="line-shape-2">
                  <img src={shape2} alt="" />
              </div>
          </div>
            <div className="wpo-wpo-contact-form-map">
                <div className="container">
                    <div className="row">
                        <SectionTitle Title={'Let’s Talk'} />
                    </div>
                    <div className="row">
                        <div className="co-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col col-lg-6 col-md-12 col-12">
                                    <div className = {`${themeMode==="dark"?"wpo-contact-form-dark":"wpo-contact-form"}`}>
                                        <h2>Get In Touch</h2>
                                        <ContactForm />
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-12 col-12">
                                    <div className="wpo-contact-info">
                                        <div className={`${themeMode==="dark"?"info-item-dark":"info-item"}`}>
                                             <div className="info-wrap">
                                            <a
                                              href="https://www.google.com/maps?q=X3H4+6JQ+North+Karachi,+Karachi,+Pakistan"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="info-wrap address"
                                              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
                                            >
                                              <div className={`${themeMode==="dark"?"info-icon-dark":"info-icon"}`}>
                                                <i className="fi flaticon-location"></i>
                                              </div>
                                              <div className="info-text">
                                                <h2>Karachi, Pakistan</h2>
                                              </div>
                                            </a>
                                            </div>
                                        </div>
                                        <div className = {`${themeMode==="dark"?"info-item-dark":"info-item"}`}>
                                            <div className="info-wrap">
                                                <a href="mailto:hamza.smh2000@gmail.com" className="info-wrap mail" style={{ textDecoration: "none", color: "inherit" }}>
                                                  <div className={`${themeMode==="dark"?"info-icon-dark":"info-icon"}`}>
                                                    <i className="fi flaticon-mail"></i>
                                                  </div>
                                                  <div className="info-text">
                                                    <h6>hamza.smh2000@gmail.com</h6>
                                                  </div>
                                                </a>

                                            </div>
                                        </div>
                                        <div className={`${themeMode==="dark"?"info-item-dark":"info-item"}`}>
                                            <div className="info-wrap">
                                            <div className="info-wrap call">
                                              <div className={`${themeMode==="dark"?"info-icon-dark":"info-icon"}`}>
                                                <i className="fi flaticon-phone-call"></i>
                                              </div>
                                              <div className="info-text">
                                                <h2 style={{ whiteSpace: "nowrap" }}>
                                                  <a href="tel:+923332139952" style={{ color: "inherit", textDecoration: "none" }}>
                                                    +92 333 2139952
                                                  </a>
                                                </h2>
                                                <h2 style={{ whiteSpace: "nowrap" }}>
                                                  <a href="tel:+923182234383" style={{ color: "inherit", textDecoration: "none" }}>
                                                    +92 318 2234383
                                                  </a>
                                                </h2>
                                              </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-wk">
                <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4214)">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4214" x="0" y="0" width="1500" height="1500"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default ContactArea;