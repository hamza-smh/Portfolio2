import pimg1 from '../images/project/img-1.jpg'
import pimg2 from '../images/project/img-2.jpg'
import pimg3 from '../images/project/img-3.jpg'

import ps1img1 from '../images/project-single/img-1.jpg'
import ps1img2 from '../images/project-single/img-2.jpg'
import ps1img3 from '../images/project-single/img-3.jpg'

import psub1img1 from '../images/project-single/p1.jpg'
import psub1img2 from '../images/project-single/p2.jpg'

import crypto from "../images/project/crypto.jpg"
import jobseekerAI from "../images/project/jobseekerAi.PNG"
import acceleraise from "../images/project/acceleraise.jpeg"
import facoonlabs from "../images/project/Facoonlabs.PNG"
import agencyWatcher from "../images/project/agency_watcher.jpeg"
import optigate from "../images/project/optigate.PNG"
import poshak from "../images/project/poshka.jpeg"
const Projects = [
    {
       Id:'1',
       pImg:crypto,
       ps1img:ps1img1,
       psub1img1:psub1img1,
       psub1img2:psub1img2,
       title:'Cryptochain',  
       type: "BlockChain Architecture",
       subTitle: 'Blockchain & Cryptocurrency',
       info: [
         "Designed and implemented a fully functional blockchain-based cryptocurrency from scratch, leveraging core software engineering principles.",
         "Built a proof-of-work blockchain system, including a Node.js backend server with an Express API and comprehensive testing suite.", 
         "Created a server-to-server architecture with real-time networking capabilities for seamless data exchange.", 
         "Applied blockchain-centric solutions to address real-world business use cases, demonstrating proficiency in distributed systems and cryptocurrency technologies."
      ],
      client:"Self-learning Project",
      duration:"3 months",
      completion:"13 March 2025"

    },
    {
       Id:'2',
       pImg:jobseekerAI,
       ps1img:ps1img2,
       psub1img1:psub1img1,
       psub1img2:psub1img2,
       title:'JobSeeker AI', 
       type:"AI Automation tool for job application",
       subTitle: 'AI Job Hunting Tool',
       info: [
         "Built a full-stack web application using Next.js and PostgreSQL with Prisma ORM, implementing server-side rendering and API routes for an automated job application platform.", 
         "Designed responsive UI components with Tailwind CSS, ensuring a modern and accessible user experience across devices.", 
         "Utilized React hooks and Next.js features (e.g., getServerSideProps) for optimized state management, performance, and seamless Frontend-Backend integration."
      ],
      company:"AMProtocol Labs",
      duration: "4 months and going",
      completion: "Ongoing"
    },
    {
      Id:'3',
      pImg:acceleraise,
      ps1img:ps1img3,
      psub1img1:psub1img1,
      psub1img2:psub1img2,
      title:'Acceleraise',  
      subTitle: 'Donation Portal ERP System',
      type: "Donation Portal for Fund Raising",
      company: "AMProtocol Labs",
      duration: "11 months",
      completion: "July 2024",
      info:[
         "Built a custom, responsive ERP system for an e-commerce platform using React and Material-UI, streamlining operational workflows.",
         "Integrated secure REST APIs to enable a safe fundraising platform, ensuring data integrity and user trust.",
         "Implemented Redux and useContext for global state management, supporting features like dark mode and theme customization.",
         "Designed reusable UI components (e.g., buttons, form fields, checkboxes) embeddable in external websites, enhancing modularity."
      ]
   },
   {
      Id:'4',
      pImg:facoonlabs,
      ps1img:ps1img2,
      psub1img1:psub1img1,
      psub1img2:psub1img2,
      title:'FacoonLabs', 
      subTitle: 'Automated Linkedin Lead Finder',
      type: "Automated Linkedin Lead Generator",
      company: "AMProtocol Labs",
      duration: "12 months",
      completion: "May 2025",
      info:[
         "Developed a sales lead generation ERP system integrated with LinkedIn Sales Navigator, automating lead acquisition processes.",
         "Created custom animations using CSS and JavaScript for a modern, user-friendly interface, styled with Material-UI and Tailwind CSS.",
         "Leveraged React hooks (useState, useEffect, useRef) for optimized state management and component lifecycle management.",
         "Implemented Redux and useContext for global state management, enabling features like dark mode and user preferences along with collaboration with the backend team to integrate GraphQL APIs.",
         "Built a React Native mobile application, extending the ERP system to iOS and Android platforms for enhanced accessibility."
      ]
   },
   {
      Id:'5',
      pImg:agencyWatcher,
      ps1img:ps1img2,
      psub1img1:psub1img1,
      psub1img2:psub1img2,
      title: 'Agency Watcher',
      subTitle:'Social Media Data Visualizer',    
      type: "Social Media Engagement Visualizer Dashboard",
      company: "AMProtocol Labs (product)",
      duration: "9 months",
      completion: "Nov 2023",
      info: [
         "Developed a responsive web application using React and Material-UI to visualize data from social media platforms(Facebook, Instagram, TikTok), improving data accessibility.",
         "Converted Figma designs into pixel perfect React components with Bootstrap, ensuring high-fidelity UI/UX implementation.",
         "Integrated REST APIs to fetch and display real-time social media data on an interactive dashboard, enhancing user engagement.",
         "Ensured cross-browser compatibility and mobile responsiveness, adhering to industry-standard web development practices.",
         "Maintained compliance with company policies, application methodologies, and quality assurance standards."
      ]
   },
   {
      Id:'6',
      pImg:poshak,
      ps1img:ps1img2,
      psub1img1:psub1img1,
      psub1img2:psub1img2,
      title: 'Poshak',
      subTitle: 'Clothing E-Commerce Website ',
      type: "E-Commerce Website Clothing Brand",
      client: "Self-learning Project",
      duration: "3 months",
      completion: "March 2023",
      info: [
         " Designed and developed a full-stack clothing e-commerce website with a minimalist and user-friendly interface, covering product listing, cart management, and checkout processes.",
         " Implemented robust state management using Redux to handle dynamic features like product filtering, cart updates, and user sessions efficiently.",
         " Integrated REST APIs to fetch and display real-time social media data on an interactive dashboard, enhancing user engagement.",
         " Created a secure checkout system integrated with payment processing, maintaining simplicity and functionality. ",
      ]
   },
   {
      Id:'7',
      pImg:optigate,
      ps1img:ps1img2,
      psub1img1:psub1img1,
      psub1img2:psub1img2,
      title: 'Optigate',
      subTitle: 'Content Locker Application ',
      type:"Content Protecting Tool",
      company: "AMProtocol (product)",
      duration: "9 months",
      completion: "July 2024",
      info: [
         "Built a custom, responsive ERP system for a content privacy-provider tool using React and Material-UI, streamlining operational workflows.",
         "Integrated secure REST APIs to enable a safe fundraising platform, ensuring data integrity and user trust.",
         "Implemented useState and useEffect for state management, supporting features like animated transitions and conditional rendering.",
         "Designed reusable UI components (e.g., buttons, form fields, checkboxes) embeddable in external websites, enhancing modularity.",
         "Used react-roter-dom for a secure navigation flow",
      ]
   },
   
    
]

export default Projects;