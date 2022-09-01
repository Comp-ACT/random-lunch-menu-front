import { useRecoilState, useSetRecoilState } from 'recoil';
import { roomListAtoms, selectedRoomAtoms } from '../recoil/states/atoms';

function useRoomList() {
  const [roomList, setRoomList] = useRecoilState(roomListAtoms);
  const setSelectedRoom = useSetRecoilState(selectedRoomAtoms);

  function addRoomList(room) {
    const copiedRoomList = [...roomList, {
      id: room.id,
      roomName: room.roomName,
    }];
    setRoomList(copiedRoomList);

    setSelectedRoom(room);
  }

  return [roomList, addRoomList];
}

export default useRoomList;
