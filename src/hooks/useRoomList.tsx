import { useRecoilState, useSetRecoilState } from 'recoil';
import { roomListAtoms, selectedRoomAtoms } from '../recoil/atoms';
import {Room} from "../types";

function useRoomList() {
  const [roomList, setRoomList] = useRecoilState(roomListAtoms);
  const setSelectedRoom = useSetRecoilState(selectedRoomAtoms);

  function addRoomList(room: Room) {
    const copiedRoomList = [...roomList, {
      id: room.id,
      roomName: room.roomName,
      restaurants: [],
    }];

    setRoomList(copiedRoomList);

    setSelectedRoom(room);
  }

  return [roomList, addRoomList];
}

export default useRoomList;
