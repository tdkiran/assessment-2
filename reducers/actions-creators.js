// TYPES
export const actionTypes = {
    SELECT_ROOM: 'SELECT_ROOM',
    DESELECT_ROOM: 'DESELECT_ROOM',
    RESET_SELECTION: 'RESET_SELECTION',
    SELECT_OCCUPANT: 'SELECT_OCCUPANT',
    INIT_STATE: 'INIT_STATE'
}

// ACTIONS
export const selectRoom = (roomId) => {
    return { type: actionTypes.SELECT_ROOM, roomId };
}

export const deSelectRoom = (roomId) => {
    return { type: actionTypes.DESELECT_ROOM, roomId };
}

export const resetSelection = () => {
    return { type: actionTypes.RESET_SELECTION };
}
export const selectOccupant = (occupantInfo) => {
    return { type: actionTypes.SELECT_OCCUPANT, occupantInfo };
}

export const initState = (state) => {
    return { type: actionTypes.INIT_STATE, state };
}