import axios, {AxiosError} from 'axios';
import {setupCache} from 'axios-cache-interceptor';
import {API_KEY1, API_KEY2} from '../shared/contants/api_key';
import BASE_URL from '../shared/contants/base_url';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    client_id: API_KEY1,
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.response?.status === 401 && error.config.params === API_KEY2) {
      return axiosInstance.request({
        ...error.config,
        params: {
          ...error.config.params,
          client_id: API_KEY2,
        },
      });
    }
    return Promise.reject(error);
  },
);

const apiClient = setupCache(axiosInstance, {
  ttl: 60 * 60 * 24, // 24 hours
});

export default apiClient;
