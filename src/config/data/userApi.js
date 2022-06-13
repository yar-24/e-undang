import axios from "axios"

const userUrl = "http://localhost:5000/api/auth/register";

export const uploadRegister = async (data) => {
    try {
      await axios.post(userUrl, data);
    } catch (error) {
      throw error;
    }
  };