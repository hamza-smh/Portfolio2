import React from 'react'
import {Link} from 'react-router-dom'
import facoonLabs from "../../images/work/logoFullNameWhite.png"
import amp from "../../images/work/AMP Logo.png"
import SectionTitle from '../SectionTitle/SectionTitle'
import {useTheme} from "../../context/theme";

const Expriences = [
    {
        date: "Jan'2023 - Nov'2023",
        logo: amp,
        position: 'Junior Frontend React Developer',
        companyName: 'AMProtocol Labs',
        workFrom: '(Remote)',
        duration:"Full-Time",
        website:"https://www.amprotocolabs.com"
    },
    {
        date: "Nov'2023 - Feb'2025",
        logo: amp,
        position: 'Mid-Level Frontend React Developer',
        companyName: 'AMProtocol Labs',
        workFrom: '(Remote)',
        duration:"Full-Time",
        website:"https://www.amprotocolabs.com"
    },
    {
        date: "July 2024 - Feb'2025",
        logo: facoonLabs,
        position: 'Mid-Level Frontend React Developer',
        companyName: 'FacoonLabs',
        workFrom: '(Remote)',
        duration:"Part-Time",
        website:"https://www.facoonlabs.com/",
    },
    {
        date: "Mar'2025 - Present",
        logo: amp,
        position: 'Full Stack Developer',
        companyName: 'AMProtocol Labs',
        workFrom: '(Remote)',
        duration:"Full-Time",
        website: "https://www.amprotocolabs.com"
    },

]



const Exprience = (props) => {
    const {themeMode, setThemeMode} = useTheme();
    return (
        <div className = {`${themeMode==="dark"?"wpo-work-area-dark":"wpo-work-area"} section-padding`}>
            <div className="container">
                <SectionTitle 
                    Title={'My Work Experience'} 
                    children = {'With a robust background in frontend and full-stack development, I have honed my skills in building scalable, user-centric applications. From crafting responsive interfaces with React and Tailwind CSS to developing efficient APIs and full-stack solutions, my journey reflects a commitment to delivering high-quality, innovative software solutions remotely.'}
                />
                <div className="wpo-work-wrap">
                    {Expriences.map((exprience, exp) => (
                        <div className="wpo-work-item" key={exp}>
                            <ul>
                                <li className="date">{exprience.date}</li>
                                <li className="logo"><img src={exprience.logo} alt=""/></li>
                                <li className="position">{exprience.position} <span>{exprience.companyName} <span>{exprience.workFrom}</span><span style={{marginLeft:"10px"}}>-{exprience.duration}</span></span></li>
                                <li className="link"><Link to={exprience.website}>Go to website</Link></li>
                            </ul>
                        </div>
                    ))}
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
        </div>
    )
}

export default Exprience;