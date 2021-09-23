import axios from 'axios';
import { serverAPIUrl1 } from '../config';



export default async function (accessKey = '') {


    if (!accessKey) {
        return new Promise((resolve, reject) => {
            reject({
                message: 'Access Key Not Found!'
            })
        })
    }

    return await axios.get(`${serverAPIUrl1}/bind_google_coder`, {
        headers: {
            accessKey: accessKey
        }
    }).then(res => {
        return res;
    }).catch(err => {
        console.log(err);
        return new Promise((resolve, reject) => {
            reject({
                error: err,
                message: 'Something went wrong!'
            })
        })
    });

}