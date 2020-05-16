// axios
import axios from 'axios'

const domain = ""
const headers = ""
export default axios.create({
    domain,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    }
    // You can add your headers here
})