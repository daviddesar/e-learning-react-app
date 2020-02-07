import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://elearning-storage-2f360.firebaseio.com'
})

export default instance