import { Experience } from '../typings';
import { BASE_URL } from './constants';

export const fetchExperiences = async () => {
    const res = await fetch(`${BASE_URL}/api/getExperience`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    return experiences;
}