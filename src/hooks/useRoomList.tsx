import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  roomIdListAtoms,
  selectedRoomIdAtoms,
  selectedRoomSelector,
} from '../recoil/atoms';
import { RoomType } from '../types';

function useRoomList() {
  const [roomIdList, setRoomIdList] = useRecoilState(roomIdListAtoms);
  const setSelectedRoomId = useSetRecoilState(selectedRoomIdAtoms);
  const setSelectedRoom = useSetRecoilState(selectedRoomSelector);

  function addRoom(room: RoomType) {
    setRoomIdList([...roomIdList, room.id]);

    setSelectedRoomId(room.id);

    setSelectedRoom(room);
  }

  return [roomIdList, addRoom];
}

export default useRoomList;
