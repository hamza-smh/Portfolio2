import React, {Fragment} from 'react';
import About2 from '../../components/about2/about2';
import BlogSection from '../../components/BlogSection/BlogSection';
import ContactArea from '../../components/ContactArea';
import Exprience2 from '../../components/Exprience2/Exprience2';
import Footer from '../../components/footer/Footer';
import Hero3 from '../../components/hero3/hero3';
import Navbar from '../../components/Navbar/Navbar'
import Pricing from '../../components/Pricing/Pricing';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import about from '../../images/about2.jpg'

const HomePage3 =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'}/>
            <Hero3/>
            <About2 about={about}/>
            <ServiceSection sClass={'wpo-service-area-s2'}/>
            <Exprience2/>
            <ProjectSection/>
            <Testimonial/>
            <Pricing/>
            <ContactArea/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage3;