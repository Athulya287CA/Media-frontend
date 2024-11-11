import axios from 'axios'


// The export keyword is used in JavaScript (and TypeScript) to make functions, objects, or primitives available for use in other files or modules. When you export a function, it allows you to import and use it in other parts of your application.

export const commonAPI = async(httpMethod,url,reqBody) =>{
    let reqConfig={
        method : httpMethod,
        url,
        headers:{
            "Content-Type":"application/json"
            // use thunder client => headers , for the correct spelling
        },
        data: reqBody
    }

    return await axios(reqConfig).then((res)=>{
        return res
    }).catch(err=>{
        return err
    })
}