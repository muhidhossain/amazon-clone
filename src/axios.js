import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://emazon-clone.herokuapp.com'
});

export default instance;