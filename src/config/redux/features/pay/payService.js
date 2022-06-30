import { axiosInstance } from "../../../../config";

//create pay
const postPay = async (payData, token) => {
  const config = {
    headers: {
      // Accept: "application/json",
      // "Access-Control-Allow-Origin": "*",
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axiosInstance
    .post("/order/charge", payData, config)
    // .then((res) => {
    //   console.log("sukses", res);
    // })
    // .catch((err) => {
    //   console.log("err");
    // });

    if (response.data) {
      localStorage.setItem('pays', JSON.stringify(response.data))
    }

  return response.data;
};

const getPays =  async (token) => {

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axiosInstance
  .get(`/order`, config)
  // .then((res) => {
  //   console.log("sukses get order", res);
  // })
  // .catch((err) => {
  //   console.log("err", err);
  // });

  return response
}

// GET PAY
const getPay =  async (id, token) => {

  const config = {
    headers: {
       Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'multipart/form-data',
      // Authorization: `Bearer ${token}`,
    },
  }

  const response = await axiosInstance
  .get(`order/status/${id}`, config)
  // .then((res) => {
  //   console.log("sukses", res);
  // })
  // .catch((err) => {
  //   console.log("err", err);
  // });

  return response
}

const deletePay = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  };

  const response = await axiosInstance.delete("order/charge/"+ id, config)
   .then((res) => {
    console.log("sukses", res);
  })
  .catch((err) => {
    console.log("err", err);
  });

  return response.data;
};

const logoutPay = () => {
  localStorage.removeItem('pays')
}


const payService = {
  postPay,
  getPays,
  getPay,
  logoutPay,
  deletePay
  // notification,
};

export default payService;
