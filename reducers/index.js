import { combineReducers } from 'redux';
import { actionTypes } from './actions-creators';
import { createSelector } from 'reselect';
import { defaultRoomInfo, defaultSelectedRoomId } from '../app_config';

function activeRooms(state = 1, action) {
    switch (action.type) {
        case actionTypes.SELECT_ROOM: {
            return action.roomId + 1;
        }
        case actionTypes.DESELECT_ROOM: {
            return action.roomId;
        }
        case actionTypes.INIT_STATE: {
            return action.activeRooms;
        }
        default: {
            return state
        }
    }
}

function occupantSelectionInfo(state = [{ adult: 1, children: 0, roomId: 0 }], action) {
    switch (action.type) {
        case actionTypes.SELECT_OCCUPANT: {
            const newOccupantInfo = state
                .filter(occupantInfo => occupantInfo.roomId !== action.occupantInfo.roomId)
                .concat([action.occupantInfo]);
            return newOccupantInfo;
        }

        case actionTypes.SELECT_ROOM: {
            const activeRooms = action.roomId;
            return state.filter(occupantInfo => occupantInfo.roomId <= activeRooms);
        }

        case actionTypes.DESELECT_ROOM: {
            const activeRooms = action.roomId;
            return state.filter(occupantInfo => occupantInfo.roomId < activeRooms);
        }

        case actionTypes.INIT_STATE: {
            return action.occupantSelectionInfo;
        }

        default: {
            return state;
        }
    }
}

// Root Reducer
const reducer = combineReducers({
    activeRooms,
    occupantSelectionInfo
});
export default reducer;

// selector
export const getActiveRooms = state => state.activeRooms;
export const getOccupantSelectionInfo = state => state.occupantSelectionInfo;

export const roomInfo = createSelector(getActiveRooms, getOccupantSelectionInfo, (activeRooms, occupantSelectionInfo) => {
    const defaultRoom = { adult: 1, children: 0 };
    const currentRoomInfo = defaultRoomInfo.map(roomInfo => {
        const roomId = roomInfo.roomId;
        const occupantInfo = occupantSelectionInfo.find(occInfo => occInfo.roomId === roomId);
        return occupantInfo ?
            { ...roomInfo, occupantInfo, active: true, hideOption: (roomId === defaultSelectedRoomId ? true : false) } :
            { ...roomInfo, occupantInfo: defaultRoom, active: (roomId + 1 <= activeRooms), hideOption: (roomId === 0 ? true : false) };
    });
    return currentRoomInfo;
});