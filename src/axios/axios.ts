import axios from 'axios';

export async function get(url:string): Promiss<any> {
    return axios(url);

    // curl --request GET \
    //  --url https://api.bithumb.com/public/ticker/ALL_KRW \
    //  --header 'accept: application/json'
}