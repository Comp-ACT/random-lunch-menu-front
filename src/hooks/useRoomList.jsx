import { useRecoilState } from 'recoil';
import { roomListAtoms } from '../recoil/states/atoms';

function useRoomList() {
  const [roomList, setRoomList] = useRecoilState(roomListAtoms);

  function addRoomList(response) {
    const copiedRoomList = [...roomList, {
      id: response.id,
      roomName: response.roomName,
    }];
    setRoomList(copiedRoomList);
  }

  return [roomList, addRoomList];
}

export default useRoomList;
