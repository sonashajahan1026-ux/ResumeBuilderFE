import axiosConfig from "./AxiosConfig";
import { baseurl } from "./BaseUrl";

 export const addResumeApi=async(reqBody)=>{
    return axiosConfig('post',`${baseurl}/resumeDatas`,reqBody)
}

export const getAllResumeApi=async()=>{
    return  await axiosConfig('get',`${baseurl}/resumeDatas`,"" )
}
export const deleteResumeApi=async(id)=>{
    return await axiosConfig('delete',`${baseurl}/resumeDatas/${id}`,{})
}
export const editResumeApi=async(id,reqBody)=>{
    return await axiosConfig('put',`${baseurl}/resumeDatas/${id}`,reqBody)
}