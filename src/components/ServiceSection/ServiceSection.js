import React, { useState } from "react";
import { useTheme } from "../../context/theme";
import { Button } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from "../../api/service";
import ServiceSingle from "../ServiceSingle";
import shape1 from "../../images/slider/line-1.png";
import shape2 from "../../images/slider/line-2.png";
import shape3 from "../../images/about/shape1.png";
import shape4 from "../../images/about/shape2.png";
import "./service.css"

const ServiceSection = (props) => {
    const { themeMode } = useTheme();
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({});
    const [activeTab, setActiveTab] = useState("1");

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item);
    };

    const handleClose = () => setOpen(false);

    const renderServices = (start, end) => (
        <div className="row align-items-center" style={{ height: "66vh" }}>
            {Services.slice(start, end).map((service, srv) => (
                <div
                    className="col-lg-4 col-md-6 col-12"
                    key={srv}
                    style={{ height: "100%", zIndex: 20 }}
                >
                    <div
                        className="wpo-service-item"
                        style={{ height: "100%", backdropFilter: "blur(20px)" }}
                    >
                        <div style={{ padding: "30px", display: "flex", justifyContent: "center" }}>
                            <img
                                src={service.icon}
                                alt=""
                                className="fi"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    filter: "invert(89%) sepia(97%) saturate(700%) hue-rotate(0deg) brightness(103%) contrast(105%)",
                                }}
                            />
                        </div>
                        <h2>{service.sTitle}</h2>
                        <p>{service.description}</p>
                        <Button className="btn" onClick={() => handleClickOpen(service)}>
                            Learn More
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div
            className={`section-padding ${
                themeMode === "dark" ? "wpo-service-area-dark" : "wpo-service-area"
            }`}
            id="service"
            style={{ position: "relative" }}
        >
            {/* background shapes */}
            <div style={{ position: "absolute", zIndex: 1, pointerEvents: "none" }}>
                {themeMode === "dark" ? (
                    <>
                        <div className="line-shape-1">
                            <img src={shape1} alt="" />
                        </div>
                        <div className="line-shape-2">
                            <img src={shape2} alt="" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="line-shape-1">
                            <img src={shape3} alt="" />
                        </div>
                        <div className="line-shape-2">
                            <img src={shape4} alt="" />
                        </div>
                    </>
                )}
            </div>

            <div className="container">
                <SectionTitle Title={"Popular Services"} />
                <div className="wpo-service-wrap">
                    {/* --- CUSTOM TAB NAV --- */}
                    <div className="custom-tabs">
                        <button
                            className={`tab-btn ${activeTab === "1" ? "active" : ""}`}
                            onClick={() => setActiveTab("1")}
                        >
                            Template Integration
                        </button>
                        <button
                            className={`tab-btn ${activeTab === "2" ? "active" : ""}`}
                            onClick={() => setActiveTab("2")}
                        >
                            API Integration
                        </button>
                        <button
                            className={`tab-btn ${activeTab === "3" ? "active" : ""}`}
                            onClick={() => setActiveTab("3")}
                        >
                            Custom Application Development
                        </button>
                    </div>

                    {/* --- TAB CONTENT --- */}
                    <div className="custom-tab-content">
                        {activeTab === "1" && renderServices(0, 3)}
                        {activeTab === "2" && renderServices(3, 6)}
                        {activeTab === "3" && renderServices(6, 9)}
                    </div>
                </div>
            </div>

            {/* background svg glow */}
            <div className="ab-shape">
                <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
                    {themeMode === "dark" ? (
                        <g opacity="0.3" filter="url(#filter0_f_39_4268)">
                            <circle cx="247.5" cy="747.5" r="207.5" fill="#FFE500" />
                        </g>
                    ) : (
                        <g opacity="0.6" filter="url(#filter0_f_39_4268)">
                            <circle cx="247.5" cy="747.5" r="247.5" fill="#fce949" />
                            <circle cx="2.5" cy="747.5" r="247.5" fill="#fce949" />
                        </g>
                    )}
                    <defs>
                        <filter
                            id="filter0_f_39_4268"
                            x="-500"
                            y="0"
                            width="1495"
                            height="1495"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <ServiceSingle
                open={open}
                onClose={handleClose}
                title={state.sTitle}
                dImg={state.sImgS}
                sImg1={state.ssImg1}
                sImg2={state.ssImg2}
            />
        </div>
    );
};

export default ServiceSection;
