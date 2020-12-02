import axios from 'axios';

export default class WebApi {
    constructor() {
    }

    request (url, config) {
        return axios({
            url: '',
            ...config
        }).then(result => result.data)
            .catch(error => {
                console.log(error);
                throw new Error(`WebApi ${url} Error!!`);
            })
    }
}
