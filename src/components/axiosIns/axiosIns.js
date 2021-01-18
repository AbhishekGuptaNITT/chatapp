import axios from "axios";

const instance = axios.create({
    baseURL:'https://chatapp-3300d-default-rtdb.firebaseio.com/',
})

export default instance