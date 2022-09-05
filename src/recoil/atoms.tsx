import {atom} from 'recoil';
import {Room} from "../types";

export const roomListAtoms = atom<Array<Room>>({
  key: 'roomListAtoms',
  default: [],
});

export const selectedRoomAtoms = atom<Room>({
  key: 'selectedRoomAtoms',
  default: {
    id: -1,
    roomName: '',
    restaurants: []
  }
});