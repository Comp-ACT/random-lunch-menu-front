import {atom} from 'recoil';
import {RoomType} from "../types";

export const roomListAtoms = atom<Array<RoomType>>({
  key: 'roomListAtoms',
  default: [],
});

export const selectedRoomAtoms = atom<RoomType>({
  key: 'selectedRoomAtoms',
  default: {
    id: -1,
    roomName: '',
    restaurants: []
  }
});