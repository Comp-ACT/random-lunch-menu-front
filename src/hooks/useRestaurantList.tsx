import { RestaurantType, RoomType } from '../types';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RoomAtoms, selectedRoomIdAtoms } from '../recoil/atoms';
import { useEffect, useState } from 'react';

function useRestaurantList() {
  const selectedRoomId = useRecoilValue(selectedRoomIdAtoms);
  const [selectedRoom, setSelectedRoom] = useRecoilState(
    RoomAtoms(selectedRoomId),
  );
  const [restaurantList, setRestaurantList] = useState<Array<RestaurantType>>(
    [],
  );

  useEffect(() => {
    setRestaurantList(selectedRoom.restaurants);
  }, [selectedRoom]);

  function addRestaurant(restaurant: RestaurantType) {
    const copiedRoom: RoomType = {
      id: selectedRoom.id,
      roomName: selectedRoom.roomName,
      restaurants: [...selectedRoom.restaurants, restaurant],
    };
    setSelectedRoom(copiedRoom);
  }

  return [restaurantList, addRestaurant];
}

export default useRestaurantList;
