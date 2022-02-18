const initialState = {
    dataUndangs: [],
    nama: "akhyar"
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            nama: 'ramadhan'
        }
    }
    return state;
}

export default globalReducer