import axios from "axios";

const API_URL = "http://localhost:5000/api/goals/";

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios
    .post(API_URL, goalData, config)
    // .then((res) => {
    //   console.log("sukses");
    // })
    // .catch((err) => {
    //   console.log("err");
    // });

  return response.data;
};

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//update
const updateGoal =  async (data, token, id) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      // Accept: 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data',
    },
  }

  const response = await axios
  .put(API_URL + id, data, config)
  // .then((res) => {
  //   console.log("sukses");
  // })
  // .catch((err) => {
  //   console.log("err");
  // });

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  };

  const response = await axios.delete(API_URL + goalId, config);

  return response.data;
};

const createComment =  async (data, token, id) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      // Accept: 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data',
    },
  }

  const response = await axios
  .post(API_URL + `comment/${id}`, data, config)
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

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  updateGoal,
  createComment,
};

export default goalService;
