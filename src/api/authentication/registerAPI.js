import { get, isPlainObject, pick } from 'lodash'
import axios from 'axios';
import { convertToFormData, serverAPIUrl } from '../config';



export default async function (data = {}) {


    if (!get(data, 'email') || !get(data, 'loginPass') || !get(data, 'loginPassS')) {
        return new Promise((resolve, reject) => {
            reject({
                message: 'Please input valid data!'
            })
        })
    }

    const passFields = ['email', 'loginPass', 'loginPassS', 'recomId'];

    data = pick(data, passFields);
    data = convertToFormData(data);
    console.log(data);
    return await axios.post(`${serverAPIUrl}/register`, data, {
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