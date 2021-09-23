import { isPlainObject } from 'lodash'
import axios from 'axios';
import { serverAPIUrl } from '../config';



export default async function (email = '') {


    if (!email) { 
        return new Promise((resolve, reject) => {
        reject({
            message: 'Please input valid email!'
        })
    })
    }

    console.log(`${serverAPIUrl}/get_email_check_code`);
    return await axios.get(`${serverAPIUrl}/get_email_check_code`, {
        params: {
            email
        },
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