import heroImage from './public/icons/pageInfo/heroImage.jpg';
import profilePic from './public/icons/pageInfo/profilePic.jpg';
import cbc from './public/icons/experiences/Cbclogo.png';
import binatec from './public/icons/experiences/binatec.png';
import cryptware from './public/icons/experiences/crypt-logo.png';
import html from './public/icons/skills/html5-original.svg';
import css from './public/icons/skills/css3-original.svg';
import bootstrap from './public/icons/skills/bootstrap-original.svg';
import javascript from './public/icons/skills/javascript-original.svg';
import java from './public/icons/skills/java-original.svg';
import jquery from './public/icons/skills/jquery-original.svg';
import scss from './public/icons/skills/sass-original.svg';
import figma from './public/icons/skills/figma-original.svg';
import express from './public/icons/skills/express-original.svg';
import git from'./public/icons/skills/git-original.svg';
import github from './public/icons/skills/github-original.svg';
import materialui from './public/icons/skills/materialui-original.svg';
import mongodb from './public/icons/skills/mongodb-original.svg';
import nextjs from './public/icons/skills/nextjs-original.svg';
import nodejs from './public/icons/skills/nodejs-original.svg';
import psql from './public/icons/skills/postgresql-original.svg';
import react from './public/icons/skills/react-original.svg';
import redux from './public/icons/skills/redux-original.svg';
import socketio from './public/icons/skills/socketio-original.svg';
import solidity from './public/icons/skills/solidity-original.svg';
import tailwindcss from './public/icons/skills/tailwindcss-plain.svg';
import threejs from './public/icons/skills/threejs-original.svg';
import typescript from './public/icons/skills/typescript-original.svg';
import vscode from './public/icons/skills/vscode-original.svg';

export const pageInfo = {
    name: "Michael Ojekunle",
    role: "Full Stack Web Developer",
    heroImage: profilePic,
    backgroundInformation: "Hello, My Name's Michael and I'm a Full Stack Web Developer.",
    profilePic: heroImage,
    phoneNumber: "+2349045156850",
    email: "michojekunle1@gmail.com",
    address: "Lagos, Nigeria",
}

export const experiences = [
    {
        jobTitle: "Web Developer",
        companyImage: binatec,
        company: "Binatec Agency",
        dateStarted:"2023-2-28",
        dateEnded: "",
        isCurrentlyWorkingHere: true,
        technologies: [
            {
                image: html, 
            },
            {
                image: css,
            },
            {
                image: javascript,
            },
            {
                image: react
            }
        ],
        points: [
            'Demonstrated Ability to manage multiple tasks while remaining adaptable and flexible.',
            'Committed to delivering excellent customer service while working in a fast paced environment.',
            'Collaborated with web content editors to facilitate website maintenance.',
            'Leveraging Mastery of Web Technologies such as HTML, CSS and JavaScript to build top quality code for diverse projects.',
        ]
    },
    {
        jobTitle: "Frontend Developer",
        companyImage: cryptware,
        company: "Cryptware Systems",
        dateStarted:"2022-08-08",
        dateEnded: "2022-10-24",
        isCurrentlyWorkingHere: false,
        technologies: [
            {
                image: html, 
            },
            {
                image: css,
            },
            {
                image: javascript,
            },
            {
                image: scss,
            },
            {
                image: materialui,
            },
            {
                image: react,
            }
        ],
        points: [
            'Translated flat designs files to clean, accessible and interactive user experiences.',
            'Collaborated with senior developers and designers to implement UI/UX designs.',
            'Participated in team meetings and contributed to project planning and ideation.',
            'Completed assigned tasks in a timely and efficient manner.',
        ],
    },
    {
        jobTitle: "Full Stack Web Developer Instructor",
        companyImage: cbc,
        company: "CBC Africa",
        dateStarted:"2022-7-14",
        dateEnded: "",
        isCurrentlyWorkingHere: true,
        technologies: [
            {
                image: html, 
            },
            {
                image: css,
            },
            {
                image: javascript,
            },
            {
                image: react
            },
            {
                image: nodejs,
            },
            {
                image: tailwindcss,
            },
            {
                image: express,
            },
            {
                image: psql,
            }
        ],
        points: [
            'Wrote supporting code for web applications and websites.',
            'Developed Databases that supported Web applications and Websites.',
            'Maintained understanding of current web technologies and programming practices through continuing education and participation in professional conferences and worskhops.',
        ]
    },

]

export const projects = [

]

export const skills = [
    {
        image: html,
        title: "HTML",
        progress: 90,
    }, 
    {
        image: css,
        title: "CSS",
        progress: 90,    
    },
    {
        image: scss,
        title: "SASS",
        progress: 85
    },
    {
        image: javascript,
        title: "Javascript",
        progress: 80,
    },
    {
        image: react,
        title: "ReactJs",
        progress: 85,
    }, 
    {
        image: nodejs,
        title: "NodeJs",
        progress: 80,
    },
    {
        image: nextjs,
        title: "NextJs",
        progress: 80
    },
    {
        image: express,
        title: "ExpressJs",
        progress: 85,
    },
    {
        image: psql,
        title: "PostgreSql",
        progress: 80,
    },
    {
        image: socketio,
        title: "SocketIo",
        progress: 75 
    },
    {
        image: solidity,
        title: "Solidity",
        progress: 40
    },
]

export const socials = [
    {
        url: 'https://instagram.com/amd_mich',
        title: 'Instagram'
    },
    {
        url: 'https://linkedin.com/in/michael-ojekunle/',
        title:'LinkedIn'
    },
    {
        url: 'https://github.com/michojekunle',
        title:'Github'
    },
    {
        url: 'https://twitter.com/@MichaelOjekunl2',
        title:'Twitter'
    },
]