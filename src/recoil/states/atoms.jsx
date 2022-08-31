import { atom } from 'recoil';

export const roomListAtoms = atom({
  key: 'roomListAtoms',
  default: [],
});

export const selectedRoomAtoms = atom({
  key: 'selectedRoomAtoms',
  default: {},
});
