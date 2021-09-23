import { forIn } from "lodash";
import isPlainObject from "lodash.isplainobject"

export const serverDomain = 'http://8.209.219.219:9980'
export const serverAPIUrl = 'http://8.209.219.219:9980/api/app/pc'
export const serverAPIUrl1 = 'http://8.209.219.219:9980/api/app/pv'


export function convertToFormData(data = {}) {

    let formData = new FormData();
    
    if(isPlainObject(data)){
        
        forIn(data, (value, key) => { 
          formData.append(key, value);
        })
    }else{
        formData.append('data', data)
    }

    return formData;

    
}