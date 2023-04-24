import { Skill } from '../typings';
import { BASE_URL } from './constants';

export const fetchSkills = async () => {
    const res = await fetch(`${BASE_URL}/api/getSkills`);

    const data = await JSON.parse(es.json());
    const skills: Skill[] = data.skills;

    return skills;
}