import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tshape from '../../images/testimonial/shape.png'

import muharib from "../../images/testimonial/Anthony-Muharib-011.png"
import muharibLogo from "../../images/testimonial/muharibLogo.png"
import laman from "../../images/testimonial/laman.webp"
import mweiser from "../../images/testimonial/mweiser.webp"
import icoin from "../../images/testimonial/logoNew.svg"
import buyerQuest from "../../images/testimonial/logoBig.png"


const testimonial = [{
        id: "01",
        tImg: muharib,
        tTitle: "Hamza is extremely professional and always delivers high-quality work on time.",
        Des: "Anthony Muharib, Lawyer Suite",
        Title: "Larry Cartensen",
        Sub: "Founder at The Data Hub",
    },
    {
        id: "02",
        tImg: laman,
        tTitle: "The attention to detail Hamza shows in his projects is truly commendable.",
        Des: "Laman Fitness Coaching",
        Title: "Laman",
        Sub: "Founder at Live Laman",
    },
    {
        id: "03",
        tImg: mweiser,
        tTitle: "One of the best frontend developers we've worked with — fast, clean, reliable.",
        Des: "MJ Wieser Law Firm",
        Title: "David Klein",
        Sub: "CTO at MJ Wieser",
    },
    {
        id: "04",
        tImg: buyerQuest,
        tTitle: "His React skills are top-notch. He brought our vision to life with precision.",
        Des: "Fatima Noor, Visionary Labs",
        Title: "Fatima Noor",
        Sub: "Co-founder at Visionary Labs",
    },
    {
        id: "05",
        tImg: icoin,
        tTitle: "Working with Hamza was a seamless experience. He communicates clearly and codes efficiently.",
        Des: "Mike Christensen, TradersPost",
        Title: "Mike Christensen",
        Sub: "Co-Founder at TradersPost",
    }
];


const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    



    return (
        <section className="wpo-testimonial-section section-padding">
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="testimonial-left">
                                <div className="testimonial-left-inner">
                                    <div className="slider-for">
                                        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={false} arrows={false} fade={true}>
                                            {
                                                testimonial.map((tesmnl, tsm) => (
                                                    <div className="testimonial-img" key={tsm}>
                                                        <img src={tesmnl.tImg} alt="" style={{height:"50%",width:"100%"}}/>
                                                    </div>
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                    <div className="side-img-1" style={{backgroundImage:`url(${laman})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                                        <div style={{width:"80px",height:"80px"}} />
                                        </div>
                                    <div className="side-img-2" style={{backgroundImage:`url(${muharibLogo})`,backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
                                        <div style={{width:"80px",height:"80px"}} />
                                        </div>
                                    <div className="side-img-3" style={{backgroundImage:`url(${mweiser})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                                        <div style={{width:"80px",height:"80px"}} />
                                        </div>
                                    <div className="side-img-4" style={{backgroundImage:`url(${icoin})`,backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
                                        <div style={{width:"150px",height:"150px"}} />
                                        </div>
                                    <div className="side-img-5" style={{backgroundImage:`url(${buyerQuest})`,backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
                                        <div style={{width:"80px",height:"80px"}} />
                                        </div>
                                    <div className="border-s1"></div>
                                    <div className="border-s2"></div>
                                    <div className="border-s3"></div>
                                </div>
                                <div className="shape-t">
                                    <svg width="750" height="750" viewBox="0 0 750 750" fill="none">
                                        <g filter="url(#filter0_f_39_4154)">
                                            <circle r="125" transform="matrix(-1 0 0 1 375 375)" fillOpacity="0.4" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_39_4154" x="0" y="0" width="750" height="750"
                                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                    result="shape" />
                                                <feGaussianBlur stdDeviation="125"
                                                    result="effect1_foregroundBlur_39_4154" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="wpo-testimonial-items">
                                <div className="slider-nav">
                                    <Slider
                                        asNavFor={nav1}
                                        ref={(slider2) => setNav2(slider2)}
                                        slidesToShow={1}
                                        dots={true}
                                        swipeToSlide={true}
                                        focusOnSelect={true}
                                    >
                                        {
                                            testimonial.map((tesmnl, tsm) => (
                                                <div className="wpo-testimonial-item" key={tsm}>
                                                    <div className="wpo-testimonial-text">
                                                        <h4>{tesmnl.tTitle}</h4>
                                                        <p>{tesmnl.Des}</p>
                                                        <div className="wpo-testimonial-text-btm">
                                                            <h3>{tesmnl.Title}, <span>{tesmnl.Sub}</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </Slider>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="left-shape"></div>
            <div className="right-shape"><img src={tshape} alt="" /></div>
        </section>
    );
}

export default Testimonial;