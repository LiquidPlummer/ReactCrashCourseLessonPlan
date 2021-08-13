import server from './axios-instance';

export async function titleSearch(title) {
    let response = server.get(`/?apikey=9bf4ad4c&t=${title}`);
    console.log('inside method', response);
    return response;
}