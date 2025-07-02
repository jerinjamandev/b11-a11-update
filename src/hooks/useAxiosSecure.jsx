

import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const axiosInstance = axios.create({
    baseURL: 'https://server-11-helpy.vercel.app' 
})

const useAxiosSecure = () => {

    const {  logOut } = useContext(AuthContext);
    const token=localStorage.getItem('access-token')
    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${token}`
        return config;
    });

    
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.status === 401 || error.status === 403) {
            logOut()
                .then(() => {
                    console.log('sign out user for 401 status code')
                })
                .catch(err => {
                    console.log(err)
                })
        }
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default useAxiosSecure;