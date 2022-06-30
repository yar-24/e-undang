import {axiosInstance} from "../../../../config"

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

  const response = await axiosInstance
    .post("/goals", goalData, config)
    .then((res) => {
      console.log("sukses");
    })
    .catch((err) => {
      console.log("err");
    });

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

  const response = await axiosInstance.get("/goals", config);

  return response.data;
};

// GET GOAL
// export const getGoal =  async (id) => {
//   const config = {
//     headers: {
//       // Accept: 'application/json',
//       // 'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'multipart/form-data',
//     },
//   }

//   const response = await axiosInstance
//   .get(`/goals/${id}`, config)
//   .then((res) => {
//     console.log("sukses di panggil", res);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

//   return response
// }

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

  const response = await axiosInstance
  .put(`/goals/${id}`, data, config)
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

  const response = await axiosInstance.delete("/goals/"+ goalId, config);

  return response.data;
};

export const createComment =  async (data, id) => {

  const config = {
    headers: {
      // Accept: 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data',
    },
  }

  const response = await axiosInstance
  .post(`/goals/comment/${id}`, data, config)
  .then((res) => {
    console.log("sukses", res);
  })
  .catch((err) => {
    console.log("err", err);
  });

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  // getGoal,
  deleteGoal,
  updateGoal,
  // createComment,
};

export default goalService;
