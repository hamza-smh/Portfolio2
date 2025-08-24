import React from 'react'
import { useTheme } from '../../context/theme'
import shape1 from '../../images/about/shape1.png'
import shape2 from '../../images/about/shape2.png'


const About = (props) => {
    const {themeMode, setThemeMode } = useTheme();   
    return(
        <div className = {`section-padding ${themeMode==="dark"?"wpo-about-area-dark":"wpo-about-area" }`} id = 'about' >
            <div div className = "container" style = {{filter: themeMode === "light" ? "brightness(160%)" : ""}}>
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="wpo-about-exprience-wrap">
                            <div className="wpo-about-exprience">
                                <h2>2.5</h2>
                                <span>Years of Experience</span>
                            </div>
                            <div className="client">
                                <h3><span data-count="100">100</span>%</h3>
                                <p>Clients Satisfactions</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12">
                        <div className="wpo-about-content">
                            <div className="wpo-about-title">
                                <h2> Crafting Code for Impactful Solutions</h2>
                                <p>I'm a dedicated full-stack developer with a passion for creating robust, 
                                    user-focused web and mobile applications. 
                                    With expertise in React Native, Node.js, GraphQL, and modern frameworks, 
                                    My goal is to craft seamless 
                                    digital experiences that solve real-world problems and drive business 
                                    success.</p>
                            </div>
                            <div className="wpo-about-funfact">
                                <div className="grid">
                                    <div className="grid-inner">
                                        <h3><span data-count="98">98</span>%</h3>
                                        <p>React.JS</p>
                                        <p style={{textWrap:"nowrap"}}>React Native</p>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="grid-inner" style={{height:"100%"}}>
                                        <h3><span data-count="90">90</span>%</h3>
                                        <p>Next.JS</p>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="grid-inner">
                                        <h3><span data-count="92">92</span>%</h3>
                                        <p style={{textWrap:"nowrap"}}>Material UI</p>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="grid-inner">
                                        <h3><span data-count="77">77</span>%</h3>
                                        <p style={{textWrap:"nowrap"}}>Tailwind CSS</p>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="grid-inner">
                                        <h3><span data-count="63">63</span>%</h3>
                                        <p>Node.JS</p>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="grid-inner">
                                        <h3><span data-count="77">77</span>%</h3>
                                        <p>PostgreSQL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ab-shape">
                <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
                    <g opacity="0.3" filter="url(#filter0_f_39_4267)">
                        <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4267" x="-500" y="0" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="ab-shape-s2">
                <svg width="1252" height="1901" viewBox="0 0 1252 1901" fill="none">
                    <g opacity="0.15" filter="url(#filter0_f_39_4265)">
                        <circle cx="950" cy="950.004" r="450" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4265" x="-0.00012207" y="0.00402832" width="1900" height="1900"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4265" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="line-shape-1">
                <img src={shape1} alt=""/>
            </div>
            <div className="line-shape-2">
                <img src={shape2} alt=""/>
            </div>
        </div>
    )
}

export default About;