let initialState = {
    users: []
}
const users = (state = initialState, {type,payload}) => {
    switch(type) {
        case 'ADD_USER':
            return {...state, users: [...state.users, payload]}
        case 'DELETE_USER':
            const localUsers = [...state.users]
            const newUsers = localUsers.filter(user => user.id !== payload)
            return {...state, users: [...newUsers]}
       
        default:
            return state;
    }
} 
export default users; 