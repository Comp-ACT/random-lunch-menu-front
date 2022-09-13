import { atom, atomFamily, selector } from 'recoil';
import { RoomType } from '../types';

export const roomIdListAtoms = atom<Array<number>>({
  key: 'roomIdListAtoms',
  default: [],
});

export const RoomAtoms = atomFamily<RoomType, number>({
  key: 'roomListAtoms',
  default: id => {
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
