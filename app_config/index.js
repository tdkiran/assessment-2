//Config
//Default Room
const defaultNumberOfRooms = 4;
const createDefaultRooms =
    (current, index) => ({ roomId: index, title: `Room ${index + 1}` });
export const defaultRoomInfo = Array.from({ length: defaultNumberOfRooms }, createDefaultRooms);
export const defaultSelectedRoomId = 0;

// Default Occupant config
const defaultAdultsOccupent = 1;
const defaultChild = 0;
export const defaultOccupent = {
    defaultAdultsOccupent,
    defaultChild
};

//Occupant selections
export const listOfAdults = [1, 2];
export const listOfChildrens = [0, 1, 2];