import axios from 'axios';

function send(url, path, data = {}, method = 'GET') {
    if (method == 'GET') {
        return axios.get(url + path);
    }else if(method == 'POST'){
        return axios.post(url + path, data);
    }
}
export default send;