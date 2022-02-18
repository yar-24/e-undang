import Axios from "axios";

export const setDataUndang = () => (dispatch) => {
    Axios.get('http://e-undangan.netlify.app/api/posts')
    .then(result => {
        const responseAPI = result;

        dispatch({type: 'UPDATE_DATA_UNDANG', payload: responseAPI.data})
    })
    .catch(err => {
        console.log('error: ', err);
    })
} 
    
