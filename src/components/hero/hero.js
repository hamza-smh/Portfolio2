import React from "react";
import { Link} from 'react-scroll'
import { useTheme } from '../../context/theme'
import hero1 from '../../images/slider/hamzaa.png'
import icon1 from '../../images/icon/react.svg'
import icon2 from '../../images/icon/node.svg'
import icon3 from '../../images/icon/icons8-postgresql.svg'

import shape1 from '../../images/slider/line-1.png'
import shape2 from '../../images/slider/line-2.png'



const Hero = () => {
    const {themeMode, setThemeMode } = useTheme();   
    
    return (
        <section className="static-hero" id='home' style = {{filter: themeMode==="light"? "brightness(140%)":""}}>
            <div div className = "hero-container">
                <div className = "hero-inner">
                    <div className = "container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2><span>Hello,</span>
                                            I am Hamza.</h2>
                                    </div>
                                    <div data-swiper-parallax="300" className="slide-sub-title">
                                        <h5>Full Stack Developer</h5>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>
                                            Full-stack developer crafting innovative, scalable web and mobile solutions with expertise in React Native, Node.js, and modern frameworks. Passionate about building user-centric applications that drive impact and efficiency.
                                        </p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="slide-btn">
                                        <Link className="theme-btn" to="contact" spy={true} smooth={true}  duration={500}>Hire Me</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-hero-right">
                <div className="static-hero-img">
                    <div className="static-hero-img-inner" style={{background:"#00000055",borderRadius:"50%",backdropFilter:"blur(22px)","&::before":{content:"",},overflow:"none",height:"fit-content"}}>
                        <img src={hero1} alt="" />
                        <div className="icon-1 floating-item"><img src={icon1} alt="" style={{width:"100%",height:"100%"}}/></div>
                        <div className="icon-2 floating-item"><img src={icon2} alt="" style={{width:"100%",height:"100%"}}/></div>
                        <div className="icon-3 floating-item"><img src={icon3} alt="" style={{width:"100%",height:"100%"}}/></div>
                        <div className="project floating-item">
                            <div className="icon">
                                <i className="fi flaticon-verified"></i>
                            </div>
                            <div className="p-text">
                                <h3><span data-count="14+">14</span>+</h3>
                                <p>Complete Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <svg width="1038" height="938" viewBox="0 0 1038 938" fill="none">
                    <g opacity="0.5" filter="url(#filter0_f_39_4392)">
                        <circle cx="290.5" cy="282.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4392" x="-457" y="-465" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4392" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="shape-2">
                <svg width="1295" height="938" viewBox="0 0 1295 938" fill="none">
                    <g opacity="0.4" filter="url(#filter0_f_39_4393)">
                        <circle cx="647.5" cy="561.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4393" x="0" y="-86" width="1295" height="1295"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4393" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="shape-3">
                <svg width="752" height="747" viewBox="0 0 752 747" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4394)">
                        <circle cx="647.5" cy="99.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4394" x="0" y="-548" width="1295" height="1295"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4394" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="line-shape-1">
                <img src={shape1} alt="" />
            </div>
            <div className="line-shape-2">
                <img src={shape2} alt="" />
            </div>
        </section>
    )
}

export default Hero;