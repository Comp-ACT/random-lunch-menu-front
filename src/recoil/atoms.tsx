import { atom, atomFamily, selector } from 'recoil';
import { RoomType } from '../types';
import { SELECTED_ROOM_ID } from '../assets/resources/localStorage';

export const roomIdListAtoms = atom<Array<number>>({
  key: 'roomIdListAtoms',
  default: [],
});

export const RoomAtoms = atomFamily<RoomType, number>({
  key: 'roomListAtoms',
  default: () => {
    return {
      id: -1,
      roomName: '선택된 방이 없습니다.',
      restaurants: [],
    } as RoomType;
  },
});

export const selectedRoomIdAtoms = atom<number>({
  key: 'selectedRoomIdAtoms',
  default: -1,
  effects: [
    ({ onSet }) => {
      onSet(id => {
        console.log(id);
        localStorage[SELECTED_ROOM_ID] = id;
      });
    },
  ],
});

export const selectedRoomSelector = selector<RoomType>({
  key: 'selectedRoomSelector',
  get: ({ get }) => {
    const selectedRoomId = get(selectedRoomIdAtoms);

    return get(RoomAtoms(selectedRoomId));
  },
  set: ({ set }, newValue) => {
    set(RoomAtoms((newValue as RoomType).id), newValue);
  },
});

export const accessTokenAtoms = atom<string>({
  key: 'accessTokenAtoms',
  default: '',
});
