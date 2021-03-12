import { create } from 'apisauce';

const api = create ({
    baseURL: "http://192.168.0.100:8080",
});

api.addResponseTransform(response => {
    if(!response.ok) throw response;
});

export default api;

// import axios from "axios";
// const api = axios.create ({
//     baseURL: "http://localhost:8080",
// });
// export default api;