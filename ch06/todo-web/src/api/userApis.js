// import { axiosInstance } from "./axiosInstance"

// export const getMeRequest = async () => {
//     try {
//         const response = await axiosInstance.get("/api/users/me");
//         console.log(response)
//         return response.data;
//     } catch(error) {
//         return error.response.data;
//     }
// }


import { axiosInstance } from "./axiosInstance";

export const getMeRequest = async () => {
    try {
        const response = await axiosInstance.get("/api/users/me");
        console.log(response);
        return response.data;
    } catch (error) {
        // ⭕ 에러를 위로 던져서 인터셉터와 React Query가 정상적으로 에러를 인지하게 합니다.
        throw error; 
    }
};