import axios from "axios";

const apiUrl = "http://localhost:5000/post/undang";

// const apiComment = axios.create({baseURL: 'http://localhost:4000/comments/'})

export const multipleFilesUpload = async (data, options) => {
  try {
    await axios.post(apiUrl, data, options);
  } catch (error) {
    throw error;
  }
};

export const getMultipleFiles = async () => {
  try {
    const { data } = await axios.get(apiUrl + "getMultipleFiles");
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateToAPI = async (data, options, id) => {
  try {
    await axios.put(`http://localhost:5000/api/user/${id}`, data, options);
  } catch (error) {
    throw error;
  }
};

export const inputFotoCewe = async (data, id) => {
  try {
    await axios.post(`http://localhost:5000/api/post/${id}/fotoCewe`, data);
  } catch (error) {
    throw error;
  }
};

export const inputFotoCowo = async (data, id) => {
  try {
    await axios.post(`http://localhost:5000/api/post/${id}/fotoCowo`, data);
  } catch (error) {
    throw error;
  }
};

export const inputFotoBerdua = async (data, id) => {
  try {
    await axios.post(`http://localhost:5000/api/post/${id}/fotoBerdua`, data);
  } catch (error) {
    throw error;
  }
};

export const inputMusic = async (data, id) => {
  try {
    await axios.post(`http://localhost:5000/api/post/${id}/music`, data);
  } catch (error) {
    throw error;
  }
};

export const inputComments = async (data, id) => {
  try {
    await axios.post(`http://localhost:5000/api/post/${id}/comments`, data);
  } catch (error) {
    throw error;
  }
};
