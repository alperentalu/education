import axios from "axios"

const gatewayInstance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  
  gatewayInstance.interceptors.request.use((config) => {
      console.log(config);
      
      console.log("req çalıştı")
      config.headers = {
              Authorization : "Bearer alperentalu",
          };
          return config;
        })
        export {gatewayInstance}