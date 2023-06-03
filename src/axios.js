import axios from "axios";

axios.defaults.baseURL = 'http://apimsg.com.devel/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');