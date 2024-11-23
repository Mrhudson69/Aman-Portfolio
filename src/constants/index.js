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
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Network Engineer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    title: "Manual Tester",
    icon: backend,
  },
  {
    title: "Team Player",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Grafana",
    icon: html,
  },
  {
    name: "Kibana",
    icon: css,
  },
  {
    name: "Elastic",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Kubernetes",
    icon: reactjs,
  },
  {
    name: "Kali",
    icon: nextJs,
  },
  {
    name: "Proxmox",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Docker",
    icon: angular,
  },
  {
    name: "Java Script",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Linux",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "DevOps And Network Engineer",
    company_name: "DevOps and Network Engineer: Streamlining Systems and Infrastructure",
    company_website: "https://www.nickelfox.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Present",
    points: [
      "Infrastructure Automation – I implement automated CI/CD pipelines, enabling seamless deployment and integration, reducing manual effort, and minimizing downtime",
      "System Optimization – I enhance system performance by fine-tuning server configurations, network settings, and cloud resources to ensure high availability and scalability",
      "Cloud Infrastructure Management – I work with cloud platforms like AWS, Azure, and Google Cloud to build and manage scalable environments. This ensures applications run smoothly, even during high traffic.",
      "Containerization and Orchestration – I use Docker and Kubernetes to deploy applications in containers, making them easier to scale and manage in any environment.",
      "Collaboration Across Teams – I work closely with developers, IT, and security teams to streamline workflows, ensuring the infrastructure supports fast and secure deployments.",
      "Disaster Recovery and Backup – I plan and implement backup solutions and recovery strategies to ensure data is safe and services can be quickly restored in case of failure.",
      "Monitoring and Performance Optimization – Using tools like Prometheus, Grafana, and Nagios, I monitor servers and networks to catch issues early and improve performance.",
      "Network Design and Implementation – I design and build networks, including LAN, WAN, and VPN, ensuring fast and secure communication between devices and systems.",
      "Troubleshooting and Maintenance – I quickly diagnose and resolve network issues using tools like Wireshark and network monitoring systems, minimizing downtime and ensuring reliability.",
      "Wireless Network Setup – I set up and manage secure WiFi networks, ensuring seamless connectivity across all devices in an organization.",
      "Network Scalability and Performance – I optimize network performance and scalability by configuring load balancers and managing bandwidth to handle growing traffic efficiently.",
    ],
  },
  {
    title: "QA Tester",
    company_name: "Quality And Data Analysis",
    company_website: "https://newgensoft.com/home-india/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Sep 2021",
    points: [
      "Manual Testing: The process of manually executing test cases without using automation tools to find bugs in software.",
      "Quality Analysis: Evaluating the quality of a product or system through various tests and assessments to ensure it meets the required standards.",
      "Data Analysis: The practice of inspecting, cleaning, and modeling data to discover useful information, inform conclusions, and support decision-making.",
      "Debugging: The process of identifying, isolating, and fixing issues or bugs within code to ensure proper functionality.",
    ],
  },
];

const projects = [
  {
    name: "ElasticSearch And Kibana Installition With SSL/TLS",
    description:
      "Using elasticsearch kibana you can secure you server with ssl/tls, as you can look into this video I have updated the installition steps and how to generate certificate.",
    tags: [
      {
        name: "kibana",
        color: "blue-text-gradient",
      },
      {
        name: "elasticsearch",
        color: "green-text-gradient",
      },
      {
        name: "SSL",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://youtu.be/ipNCefDoOvA?si=I8uRDxIj0A-mLd92",
  },
  {
    name: "Linux Commands You Must Know",
    description:
      "Top 40 Linux Command for you, As everyone can use this on daily basis.",
    tags: [
      {
        name: "Linux",
        color: "blue-text-gradient",
      },
      {
        name: "Commands",
        color: "green-text-gradient",
      },
      {
        name: "Ubuntu",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://youtu.be/sgypO7jAz-I?si=iI9NIfDl16waOiQ2",
  },
  {
    name: "Understanding How Ports Work in Networking",
    description:
      "Explained in the video with basis, what is the port and how it is work in the networking",
    tags: [
      {
        name: "Port",
        color: "blue-text-gradient",
      },
      {
        name: "Network",
        color: "green-text-gradient",
      },
      {
        name: "Ports",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://youtu.be/tUnv8OLtMbM?si=EgtqL2BCgoIjj1QJ",
  },  
];

const personalInfo = {
  name: "Aman",
  fullName: "Aman Kumar",
  email: "amankumar322230@gmail.com",
  role: "DevOps Engineer",
  about: `I’m a DevOps and Network Engineer with over three years of hands-on experience. I started my journey with a passion for technology, and throughout the years, I’ve gained deep expertise in optimizing workflows, automating processes, and building robust network infrastructures. My focus is always on making tasks easier, more efficient, and finding innovative solutions to complex challenges.
From server setups to seamless integrations, I enjoy helping teams and individuals streamline their work and achieve more with less effort. I'm always eager to learn new technologies and share my knowledge to make a positive impact in everything I do!`,
  projectsIntro: `These projects, along with my YouTube tutorials, showcase my skills and experience. Through real-world examples and step-by-step learning videos, I demonstrate my ability to solve complex problems, work with diverse technologies, and manage projects effectively. Each project is briefly described, with live demos and links to tutorials for further learning.`,
};

const publicUrls = {
  resume:
    "https://docs.google.com/document/d/1EjjALIO4EtN_h0fyK8YMt0MxPrbFfez_H_v19Kzqmdg/edit?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/aman-kumar-89945a274/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/amankumar322230",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
