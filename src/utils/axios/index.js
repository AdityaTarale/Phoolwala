/**
 * Global app axios instance
 */

import axios from 'axios';

import { getItemFromAsyncStorage } from '../async-storage-service';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.headers.common.Authorization = getItemFromAsyncStorage('authToken');

export default instance;
