// axios
import axios from 'axios'

const domain = ""
const baseURL = ""
const headers = ""
export default axios.create({
    domain,
    baseURL: 'http://192.168.43.73:3333/',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    }
    // You can add your headers here
})