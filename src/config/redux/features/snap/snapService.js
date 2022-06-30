import { axiosInstance } from "../../../../config";

//create pay
const postSnap = async (snapData) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      // 'Content-Type': 'multipart/form-data',
      // Authorization: `Bearer ${token}`,
    },
  };

  
  const response = await axiosInstance
  .post("/snap/", snapData, config)
  // .then((res) => {
  //   console.log("sukses snap", res);
  // })
  // .catch((err) => {
  //   console.log("err");
  // });
  
  if (response.data) {
    localStorage.setItem('snaps', JSON.stringify(response))
  }

  return response.data;
};

//create pay
const getSnap = async (snapData, id) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      // 'Content-Type': 'multipart/form-data',
    },
  };

  const response = await axiosInstance
    .get(`/snap/${id}`, snapData, config)
    .then((res) => {
      console.log("sukses get snap", res);
    })
    .catch((err) => {
      console.log("err");
    });

  return response.data;
};


const snapService = {
  postSnap,
  getSnap
};

export default snapService;
