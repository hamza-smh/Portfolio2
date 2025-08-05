import responsive from "../images/png/responsive.svg"
import customization from "../images/png/customization.svg"
import optimization from "../images/png/optimization.svg"
import api from "../images/png/API.svg"
import api3 from "../images/png/api3.svg"
import graphql from "../images/png/graphql.svg"
import layout from "../images/png/web-app-icon.svg"
import full from "../images/png/full-stack-developer.svg"
import mobile from "../images/png/mobile-phone-svgrepo-com (1).svg"
// import cloudapi from "../images/png/009-cloud-api.png"





import sgImgS1 from '../images/service-single/graphics/img-1.jpg'
import sgImgS2 from '../images/service-single/graphics/img-2.jpg'
import sgImgS3 from '../images/service-single/graphics/img-3.jpg'

import brImgS1 from '../images/service-single/brand/img-1.jpg'
import brImgS2 from '../images/service-single/brand/img-2.jpg'
import brImgS3 from '../images/service-single/brand/img-3.jpg'

import uxImgS1 from '../images/service-single/ux/img-1.jpg'
import uxImgS2 from '../images/service-single/ux/img-2.jpg'
import uxImgS3 from '../images/service-single/ux/img-3.jpg'

import dvImgS1 from '../images/service-single/development/img-1.jpg'
import dvImgS2 from '../images/service-single/development/img-2.jpg'
import dvImgS3 from '../images/service-single/development/img-3.jpg'

import adImgS1 from '../images/service-single/app/img-1.jpg'
import adImgS2 from '../images/service-single/app/img-2.jpg'
import adImgS3 from '../images/service-single/app/img-3.jpg'

import swImgS1 from '../images/service-single/softwere/img-1.jpg'
import swImgS2 from '../images/service-single/softwere/img-2.jpg'
import swImgS3 from '../images/service-single/softwere/img-3.jpg'

import smImgS1 from '../images/service-single/sm/img-1.jpg'
import smImgS2 from '../images/service-single/sm/img-2.jpg'
import smImgS3 from '../images/service-single/sm/img-3.jpg'

import dmImgS1 from '../images/service-single/dm/img-1.jpg'
import dmImgS2 from '../images/service-single/dm/img-2.jpg'
import dmImgS3 from '../images/service-single/dm/img-3.jpg'

import emailImgS1 from '../images/service-single/email/img-1.jpg'
import emailImgS2 from '../images/service-single/email/img-2.jpg'
import emailImgS3 from '../images/service-single/email/img-3.jpg'



const Services = [
    {
        Id: '1',
        sImgS:sgImgS1,
        sTitle: 'Responsive Design Implementation',
        description:'Adapting templates for flawless display across devices using frameworks like React Native and Tailwind CSS.',
        des2:'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
//        icon:'flaticon-vector',
        icon: responsive,
        ssImg1:sgImgS2,
        ssImg2:sgImgS3,
    },
    {
        Id: '2',
        sImgS:brImgS1,
        sTitle: 'Feature Customization',
        description:'Enhancing templates with custom functionalities to meet specific client requirements.',
        des2:'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon:customization,
        //icon:'flaticon-vector',
        ssImg1:brImgS2,
        ssImg2:brImgS3,
    },
    {
        Id: '3',
        sImgS:uxImgS1,
        sTitle: 'Performance Optimization',
        description:'Ensuring fast load times and smooth interactions through optimized code and asset management.',
        des2:'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon:'flaticon-verified',
        icon:optimization,
        ssImg1:uxImgS2,
        ssImg2:uxImgS3,
    },
    {
        Id: '4',
        sImgS:dvImgS1,
        sTitle: 'GraphQL API Development',
        description:'Creating efficient, scalable APIs to fetch and manage data, as used in projects.',
        des2:'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        //icon:'flaticon-coding',
        icon:graphql,
        ssImg1:dvImgS2,
        ssImg2:dvImgS3,
    },
    {
        Id: '5',
        sImgS:adImgS1,
        sTitle: 'Third-Party API Integration',
        description:'Seamlessly connecting apps with services like payment gateways, CRMs, or analytics tools.',
        des2:'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        //icon:'flaticon-add',
        icon:api3,
        ssImg1:adImgS2,
        ssImg2:adImgS3,
    },
    {
        Id: '6',
        sImgS:swImgS1,
        sTitle: 'API Performance Tuning',
        description:'Optimizing API calls for speed and reliability to enhance application efficiency.',
        des2:'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        //icon:'flaticon-smartphone',
        icon:api,
        ssImg1:swImgS2,
        ssImg2:swImgS3,
    },
    {
        Id: '7',
        sImgS:smImgS1,
        sTitle: 'Cross-Platform Mobile Apps',
        description:'Developing apps with React Native for iOS and Android.',
        des2:'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        //icon:'flaticon-app-development',
        icon:mobile,
        ssImg1:smImgS2,
        ssImg2:smImgS3,
    },
    {
        Id: '8',
        sImgS:dmImgS1,
        sTitle: 'Full-Stack Web Solutions',
        description:'Crafting end-to-end web applications using Node.js, React, and PostgreSQL for scalability.',
        des2:'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        //icon:'flaticon-promotion',
        icon:full,
        ssImg1:dmImgS2,
        ssImg2:dmImgS3,
    },
    {
        Id: '9',
        sImgS:emailImgS1,
        sTitle: 'UI/UX Design Integration',
        description:'Incorporating intuitive, user-centric designs to deliver engaging and functional applications.',
        des2:'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        //icon:'flaticon-email-marketing',
        icon:layout,
        ssImg1:emailImgS2,
        ssImg2:emailImgS3,
    },
]    

export default Services;