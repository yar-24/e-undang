import axios from 'axios'

const API_URL = 'http://localhost:5000/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

//update
const update =  async (data, id) => {

  const config = {
    headers: {
      // Accept: 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data',
    },
  }

  const response = await axios
  .put(API_URL + `update/${id}`, data, config)
  // .then((res) => {
  //   console.log("sukses", res);
  // })
  // .catch((err) => {
  //   console.log("err", err);
  // });

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}
//Login Google
// const loginGoggle = async (userData) => {
//   const response = await axios.get('http://localhost:5000/auth/login/success', userData)

//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data))
//   }

//   return response.data
// }

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
  update
}

export default authService