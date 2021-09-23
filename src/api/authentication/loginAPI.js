import { get, isPlainObject, pick } from 'lodash'
import axios from 'axios';
import { convertToFormData, serverAPIUrl } from '../config';



export default async function (data = {}) {


    if (!get(data, 'email') || !get(data, 'loginPass')) {
        return new Promise((resolve, reject) => {
            reject({
                message: 'Please input valid data!'
            })
        })
    }

    const passFields = ['email', 'loginPass'];

    data = pick(data, passFields);
    data = convertToFormData(data);

    return await axios.post(`${serverAPIUrl}/login`, data, {
        headers : {
            "Content-Type": "multipart/form-data"
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