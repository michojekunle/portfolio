import { Project } from '../typings';
import { BASE_URL } from './constants';

export const fetchProjects = async () => {
    const res = await fetch(`${BASE_URL}/api/getProjects`);

    const data = await res.json();
    const projects: Project[] = data.projects;

    return projects;
}