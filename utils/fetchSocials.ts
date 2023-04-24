import { Social } from '../typings';
import { BASE_URL } from './constants';

export const fetchSocials = async () => {
    const res = await fetch(`${BASE_URL}/api/getSocials`);

    const data = await JSON.parse(res.json());
    const socials: Social[] = data.socials;

    return socials;
}