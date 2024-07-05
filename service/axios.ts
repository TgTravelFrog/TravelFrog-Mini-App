import axios from 'axios';

import { getConfig } from '../common/config';

let axiosIns: any = axios.create({
    // baseURL: getConfig('APP_SERVICES_API_URL')
});

axiosIns.defaults.responseType = 'json';

axiosIns.defaults.validateStatus = (status: number) => {
    return true;
};
axiosIns.interceptors.request.use((config: any) => {
    if (config.method === 'get') {
        config.url = config.url.indexOf('?') === -1 ? `${config.url}?_rnd=${Date.now()}` : `${config.url}&_rnd=${Date.now()}`;
    }

    return config;
});

axiosIns.interceptors.response.use((response: any) => {
    let data = response.data;
    let status = response.status;
    if ([200, 201].includes(status)) {
        if (data?.code === 401) {
            return Promise.resolve(data);
        }
        return Promise.resolve(data);
    } else {
        return Promise.reject(data);
    }
});

export default axiosIns;
