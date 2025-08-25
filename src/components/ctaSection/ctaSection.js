import React from 'react'
import { Link} from 'react-scroll'
import { useTheme } from '../../context/theme'

const CtaSection = (props) => {
    const {themeMode, setThemeMode } = useTheme();  
    return (
        <div className="upper-contact-area">
            <div className="container">
                <div className = "contact-grids" style = {{background: themeMode === "dark" ? "linear-gradient(270deg, #000, #0b4100)" : "linear-gradient(270deg, #000, #23ca01)"}}>
                    <div className="row align-items-center">
                        <div className="col col-lg-6">
                            <h2>Send me a message and make something together.</h2>
                        </div>
                        <div className="col col-lg-6">
                            <div className="send-message-btn">
                                <Link className="theme-btn" to="contact" spy={true} smooth={true} duration={500}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    < div className = "left-shape"
                    style = {
                        {
                            background: themeMode === "dark" ? "#0b4100" : "#23ca01"
                        }
                    }
                    />
                </div>
            </div>
        </div>
    )
}

export default CtaSection;