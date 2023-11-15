import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";


// NAVIGATION


export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
    { href: '/', key: 'services', label: 'Services' },
    { href: '/', key: 'pricing ', label: 'Pricing ' },
    { href: '/', key: 'contact_us', label: 'Contact Us' },
  ];
  
  // CAMP SECTION
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];
  
  // FEATURES SECTION
  export const Features = [
    {
      title: 'Website Development',
      icon: "/website.svg",
      variant: '#0077B6',
      description:
        "Elevate your online presence with expertly crafted websites tailored to your brand's identity.",
    },
    {
      title: 'Mobile App Development',
      icon: '/android.svg',
      variant: '#0077B6',
      description:
        "Transform your ideas into reality with cutting-edge mobile app development services for both Android  and iOS",
    },
    // {
    //   title: 'Custom Application',
    //   icon: '/people.svg',
    //   variant: '#0077B6',
    //   description:
    //     'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet.',
    // },
    {
      title: 'Social Media Management',
      icon: '/facebook.svg',
      variant: '#0077B6',
      description:
        'Boost engagement and reach with strategic social media management for your brand.',
    },
    // {
    //   title: 'Google Promotion',
    //   icon: '/google.svg',
    //   variant: '#0077B6',
    //   description:
    //     'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    // },
    // {
    //   title: 'Content Writing',
    //   icon: '/content-writing.svg',
    //   variant: '#0077B6',
    //   description:
    //     'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    // },
    {
      title: 'Cyber Security Consulting',
      icon: '/cyberSecurity.svg',
      variant: '#0077B6',
      description:
        'Protect your digital assets with expert cyber security consulting services tailored to your business needs.',
    },
    {
      title: 'AI Consultation',
      icon: '/ai.svg',
      variant: '#0077B6',
      description:
        'Embrace the future with AI consultation services, optimizing your business for success.',
    },
    {
      title: 'Research Projects',
      icon: '/consultation.svg',
      variant: '#0077B6',
      description:
        'Dive into innovation with our comprehensive research projects in AI, ML, and cyber security.',
    },
    
    // {
    //   title: 'Brand Design and Strategy',
    //   icon: '/brand.svg',
    //   variant: '#0077B6',
    //   description:
    //     'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    // },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Cognito-AI',
        'Services',
        'Workshop',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    // {
    //   title: 'Our Community',
    //   links: ['abc', 'xyz', '123'],
    // },
  ];


  export const WorkProjects = [
    {
      icon: RxDesktop,
      title:'Website Development',
      bgImg: '/project5.jpg'
    },
    {
      icon: RxCrop,
      title:'Cyber Security',
      bgImg: '/project1.jpg'
    },
    {
      icon: RxReader,
      title:'Android Development',
      bgImg: '/project5.jpg'
    },
    {
      icon: RxPencil2,
      title:'Brand Design',
      bgImg: '/project2.jpeg'
    },
    {
      icon: RxAccessibility,
      title:'Social Media Management',
      bgImg: '/project3.png'
    },
    {
      icon: RxRocket,
      title:'Content Writing',
      bgImg: '/project4.jpg'
    },
  ];


  
  
  
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Number', value: '123-456-7890' },
      { label: 'Email Address', value: 'cognito@ai.com' },
    ],
  };
  
  export const SOCIALS = [  
      {href:"/", icons:'/facebook-svg.svg'},
      {href:"/", icons:'/instagram.svg'},
      {href:"https://x.com/CognitoAi2023", icons:'/twitter.svg'},
      {href:"/", icons:'/youtube.svg'},
      {href:"https://linkedin.com/in/cognito-ai-29a45229a", icons:'/linkedin.svg'},
    
  ];