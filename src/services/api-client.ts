import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ad0f991a540e474fa9b2cac3da14669b'
    }
})