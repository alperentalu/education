import axios from "axios"

axios.interceptors.request.use((res) => {
    return res;
},
(err) => {
    if(err.response.status === 401) {
        // login'e gönder
    }
    throw err;
}
)

