import apisauce from 'apisauce';
const joshiClasses=(baseURL="http://10.42.0.1:8080/") => apisauce.create({
    baseURL,
    timeout: 10000
});

const apiClient = joshiClasses();

const userLogin = (credentials) => {
    var loginResp = apiClient.post('api/login', credentials);
    console.log(loginResp);
    return loginResp;
};

const questions = () => {
    var qresp = apiClient.get('api/q');
    console.log(qresp);
    return qresp;
};

export default {questions};