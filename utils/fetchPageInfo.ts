import { PageInfo } from '../typings';
import { BASE_URL } from './constants';

export const fetchPageInfo = async () => {
    const res = await fetch(`${BASE_URL}/api/pageInfo`);

    console.log(res);
    const data = await res.json();
    console.log(data);
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}