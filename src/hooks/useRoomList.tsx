import { useRecoilState, useSetRecoilState } from 'recoil';
import { roomListAtoms, selectedRoomAtoms } from '../recoil/atoms';
import {RoomType} from "../types";

function useRoomList() {
  const [roomList, setRoomList] = useRecoilState(roomListAtoms);
  const setSelectedRoom = useSetRecoilState(selectedRoomAtoms);

  function addRoomList(room: RoomType) {
    setRoomList([...roomList, room]);

    setSelectedRoom(room);
  }

  return [roomList, addRoomList];
}

export default useRoomList;
