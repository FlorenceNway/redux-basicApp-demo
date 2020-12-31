let id = 1;

export const addUser = (username) => {
    return {
        type: 'ADD_USER',
        payload: {id: id++, username}
    } 
}

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        payload: id
    } 
}