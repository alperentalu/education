import axios from "axios"

const gatewayInstance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  
  gatewayInstance.interceptors.request.use((config) => {
      
      config.headers = {
              Authorization : `Bearer ${localStorage.getItem('token')}`,
          };
          return config;
        })
        export {gatewayInstance}