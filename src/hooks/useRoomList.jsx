import { useState } from 'react';

function useRoomList(initialForm) {
  const [roomList, setRoomList] = useState(initialForm);

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
