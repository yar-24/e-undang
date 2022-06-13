// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";
// import { CardUser } from "../../componentsApp/kecil";
// import { setDataUndang } from "../../config/redux/action";
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import  Axios from "axios";

// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   width: 100%;
// `;

// const User = () => {
//   const dispatch = useDispatch();
//   const { dataUndang } = useSelector((state) => state.userReducer);

//   useEffect(() => {
//     dispatch(setDataUndang());
//   }, [dispatch]);

//   const confirmDelete = (id) =>{
//     confirmAlert({
//       title: 'Confirm to delete',
//       message: 'Apakah Amda yakin akan menghapus User ?',
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => {
//             Axios.delete(`http://localhost:4000/api/user/${id}`)
//             .then(res => {
//               dispatch(setDataUndang());
//             })
//             .catch(err => {
//               console.log('error', err);
//             })
//           }
//         },
//         {
//           label: 'No',
//           onClick: () => console.log('admin tidak setuju')
//         }
//       ]
//     });
//   }

//   return (
//     <Container>
//       {dataUndang.map((item) => (
//         <CardUser nama={item.nama} date={item.createdAt} key={item._id} id={item._id} onDelete={confirmDelete} />
//       ))}
//     </Container>
//   );
// };

// export default User;
