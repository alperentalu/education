import {gatewayInstance} from "../interceptors/request"






export const getUser = () => {
    gatewayInstance.get("http://localhost:5000/api/user").then((res) => {
    console.log(res.data)
  })
}