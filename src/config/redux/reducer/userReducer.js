const initialStateUser = {
    dataUndang: []
}

const userReducer = (state = initialStateUser, action) => {
    if(action.type  === 'UPDATE_DATA_UNDANG') {
        return{
            ...state,
            dataUndang: action.payload
        }
    }

    return state;
}

export default userReducer