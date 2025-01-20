import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    fdev,
    fdesign,
    cw,
    pet,
    ecom,
    port,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title:"3D Designer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "FrontEnd Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Designer",
      icon: fdesign,
      iconBg: "#383E56",
      date: "May 2024 - Now",
      points: [
        "Designing interactive prototypes and wireframes in Figma",
        "Leveraging Canva for branding and marketing materials",
        "Crafting responsive, user-centered designs for various devices",
        "Building consistent design systems with reusable components",
      ],
    },
    {
      title: "Frontend Development",
      company_name: "Freelancing",
      icon: fdev,
      iconBg: "#E6DEDD",
      date: "April 2024 - Now",
      points: [
        "Developing responsive, component-based UIs with React",
        "Writing clean, semantic HTML and CSS for seamless layouts.",
        "Integrating Three.js for interactive 3D visuals and animations",
        "Optimizing performance and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Content Writing",
      company_name: "Qatar based Company",
      icon: cw,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Writing detailed explanations of complex engineering concepts and processes",
        "Developing user-friendly guides, manuals, and documentation",
        "Analyzing large datasets with MATLAB's built-in functions and toolboxes",
        "Creating simulations and visualizations to support engineering projects",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Areeba proved me wrong.",
      name: "Abdul Athar",
      designation: "CEO",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Areeba creates exquisite and detailed visuals as required on time.",
      name: "Arslan Ali",
      designation: "Project Manager",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
   
  ];
  
  const projects = [
    {
      name: "Pet Haven Adoption App",
      description:
        "React Native and expo based mobile app that helps users adopt pets",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "expo",
          color: "green-text-gradient",
        },

       
      ],
      image: pet,
      source_code_link: "https://github.com/areebahamid/PetHavenProject.git",
    },
    {
      name: "Ecommerce full-fledge website",
      description:
        "Web application that enables users to shop and vendors to display products",
      tags: [
        {
          name: "ejs",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: ecom,
      source_code_link: "https://github.com/areebahamid/Web-Semester-Project.git",
    },
    {
      name: "Web Portfolio",
      description:
        "Portfolio depicting use of pure css ,html, js and 3d technologies",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/areebahamid/Portfolio.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };