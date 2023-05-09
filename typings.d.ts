import { StaticImageData } from "next/image";

export interface PageInfo {
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: StaticImageData;
    name: string;
    phoneNumber: string;
    profilePic: StaticImageData;
}

export interface Skill {
    image: StaticImageData;
    progress: number;
    title: string;
}

export interface Technology {
    image: StaticImageData;
    progress?: number;
    title?: string;
}

export interface Experience {
    company: string;
    companyImage: StaticImageData;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];        
}

export interface Project {
    title: string;
    image: StaticImageData;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Social {
    title: string;
    url: string;
}

