import {
    KameraSenja,
    cafe,
    figmaks,
    foto1,
    foto2,
    foto3,
    foto4,
    umby,
    core,
    ecommerce,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      
      icon: foto1,
    },
    {
      
      icon: foto2,
    },
    {
      
      icon: foto3,
    },
    {
      
      icon: foto4,
    },
  ];
  
  
  
  const experiences = [
    {
      title: "Project-Based Virtual Intern : Front end developer- Core initiative x Rakamin Academy",
      company_name: "Core Initiative",
      icon: core,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "I have successfully developed various responsive and interactive websites and  using technologies such as HTML, CSS, and JavaScript. I also have experience in using the Vue JS framework to build dynamic and efficient user interfaces.",
        "Have basic knowledge of the concepts of Continuous Integration (CI) with jenkins and Continuous Deployment (CD), as well as awareness of the importance of building efficient workflows in Web development.",
        "I understand the concept of containerization, using Docker CLI commands, creating Dockerfiles, and using Docker Compose.",
        
      ],
    },
    {
      title: "Bachelor of Informatics",
      company_name: "Universitas Mercu Buana Yogyakarta",
      icon: umby,
      iconBg: "#E6DEDD",
      date: "sep 2021 - okt 2025 expected",
      points: [
        "Create a web design of information about the camera using figma then build an interactive web page with Bootstrap and get an A.",
        "Get an A grade on the databse course,because create simple ERD and database design Video game distribution and management as a final project using SQl database with queries commonly used in SQL.",
        "Create a GYM database as the final project of the datbase programming course in the third semester and get an A.",
        
      ],
    },
    
  ];
  
  
  
  const projects = [
    {
      name: "Kamera Senja",
      description:
        "Find complete information about cameras on this website. Get buying guides, photography tips. Improve your knowledge and choose a camera that suits your needs here.",
      tags: [
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
      ],
      image: KameraSenja,
      source_code_link: "https://jayvanka.github.io/Kamera-Senja.github.io/",
    },
    {
      name: "Syntax cafe",
      description:
        "The project aims to create a website that illustrates the uniqueness and appeal of a café. ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "orange-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
      ],
      image: cafe,
      source_code_link: "https://jayvanka.github.io/web-cafe/",
    },
    {
      name: "Kamera senja figma design",
      description:
        "With a blend of captivating design and seamless user experience, In this website, you will find intuitive navigation, informative content, and attractive layouts from various design references that I got.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        
      ],
      image: figmaks,
      source_code_link: "https://www.figma.com/proto/OWUTe2SHScSoeEFYchnqvx/Website-kamera-senja?node-id=223-24&scaling=min-zoom&page-id=2%3A2&starting-point-node-id=223%3A24",
    },
    {
      name: "e-commerce with REST API",
      description:
        "My e-commerce project uses fakestoreapi.com REST APIs to enable users to connect in real-time with product data sources through effective integration with REST APIs.",
      tags: [
        {
          name: "Vuejs",
          color: "blue-text-gradient",
        },
        {
          name: "Fakestoreapi",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://jayvanka.github.io/ecommerce-catalog/",
    },
  ];
  
  export { services, experiences,projects };