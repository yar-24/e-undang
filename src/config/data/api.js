import axios from "axios";

const apiUrl = 'http://localhost:4000/api/post';

export const multipleFilesUpload = async (data, options) => {
    try {
        await axios.post(apiUrl, data, options);
    } catch (error) {
        throw error;
    }
}

export const getMultipleFiles = async () => {
    try{
        const {data} = await axios.get(apiUrl + 'getMultipleFiles');
        return data;
    }catch(error){
        throw error;
    }
}

export const updateToAPI = async (data, options, id) => {
    try {
        await axios.put(`http://localhost:4000/api/post/${id}`, data, options);
    } catch (error) {
        throw error;
    }
}
