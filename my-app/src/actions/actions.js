function addTeam(data) {
    return { type: 'ADD_TEAM', data };
}
function addUser(data) {
    return { type: 'ADD_USER', data};
}
function deleteUser(data) {
    return { type: 'DELETE_USER', data};
}

export {addTeam, addUser, deleteUser};