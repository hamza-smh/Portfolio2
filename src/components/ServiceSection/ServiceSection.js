import React, {useState} from "react";
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import {useTheme} from "../../context/theme";
import {Button} from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from "../../api/service";
import classnames from "classnames";
import ServiceSingle from "../ServiceSingle";
import shape1 from "../../images/slider/line-1.png";
import shape2 from "../../images/slider/line-2.png";
import shape3 from "../../images/about/shape1.png";
import shape4 from "../../images/about/shape2.png";

const ServiceSection = (props) => {
    const {themeMode, setThemeMode} = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({});

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item);
    };

    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div
            className={`section-padding ${
                (props.sClass, themeMode === "dark" ? "wpo-service-area-dark" : "wpo-service-area")
            }`}
            id="service"
            style={{position: "relative"}}
        >
            <div
                style={{
                    position: "absolute",
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            >
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
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={`${classnames({active: activeTab === "1"})}`}
                                onClick={() => {
                                    toggle("1");
                                }}
                                style={{fontSize: "22px", zIndex: 90}}
                            >
                                Template Integration
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={`${classnames({active: activeTab === "2"})}`}
                                onClick={() => {
                                    toggle("2");
                                }}
                                style={{fontSize: "22px", zIndex: 20}}
                            >
                                API Integration
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={`${classnames({active: activeTab === "3"})}`}
                                onClick={() => {
                                    toggle("3");
                                }}
                                style={{
                                    fontSize: "16px",
                                    textWrap: "nowrap",
                                    width: "fit-content",
                                    padding: "0px 15px",
                                    zIndex: 20,
                                }}
                            >
                                Custom Application Development
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="row align-items-center" style={{height: "66vh"}}>
                                {Services.slice(0, 3).map((service, srv) => (
                                    <div
                                        div
                                        className="col-lg-4 col-md-6 col-12"
                                        key={srv}
                                        style={{height: "100%", zIndex: 20}}
                                    >
                                        <div
                                            className="wpo-service-item"
                                            style={{height: "100%", backdropFilter: "blur(20px)"}}
                                        >
                                            <div style={{padding: "30px", display: "flex", justifyContent: "center"}}>
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
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="row align-items-center" style={{height: "66vh"}}>
                                {Services.slice(3, 6).map((service, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv} style={{height: "100%",zIndex:20}}>
                                        <div
                                            className="wpo-service-item"
                                            style={{height: "100%", backdropFilter: "blur(20px)"}}
                                        >
                                            <div style={{padding: "30px", display: "flex", justifyContent: "center"}}>
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
                        </TabPane>
                        <TabPane tabId="3">
                            <div className="row align-items-center" style={{height: "66vh"}}>
                                {Services.slice(6, 9).map((service, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv} style={{height: "100%",zIndex:20}}>
                                        <div
                                            className="wpo-service-item"
                                            style={{height: "100%", backdropFilter: "blur(20px)"}}
                                        >
                                            {/* <div className="icon">
                                                <i className={`fi ${service.icon}`}></i>
                                            </div> */}
                                            <div style={{padding: "30px", display: "flex", justifyContent: "center"}}>
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
                        </TabPane>
                    </TabContent>
                </div>
            </div>
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
