export interface PageInfo {
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: string;
    name: string;
    phoneNumber: string;
    profilePic: string;
}

export interface Skill {
    image: string;
    progress: number;
    title: string;
}

export interface Technology {
    image: string;
    progress: number;
    title: string;
}

export interface Experience {
    company: string;
    companyImage: string;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];        
}

export interface Project {
    title: string;
    image: string;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Social {
    title: string;
    url: string;
}

