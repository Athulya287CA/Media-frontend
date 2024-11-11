import { commonAPI } from "./commonAPI"
import { server_url } from "./server_url"

//addVideoAPI

export const uploadVideoAPI = async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}

// getAllVideoAPI

export const getAllVideoAPI = async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}

//getAvideo

export const getAVideoAPI = async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}

//deleteVideoAPI

export const deleteVideoAPI = async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})

    //a video is stored in an object, so reqBody is {}
}

//addHistory

export const addHistoryAPI = async(video) =>{
    return await commonAPI("POST",`${server_url}/history`,video)
}

//getHisory

export const getHistoryAPI = async() =>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

//deleteHistory

export const deleteHistoryAPI = async(id) =>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}

//addCategoryAPI

export const addCategoryAPI= async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}

//getCategoryAPI

export const getCategoryAPI = async() =>{
    return await commonAPI("GET",`${server_url}/category`,"")
}

//deleteCategoryAPI

export const deleteCategoryAPI = async(id) =>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}

//updateCategoryAPI
export const updateCategoryAPI = async(id,categoryDetails) =>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}
