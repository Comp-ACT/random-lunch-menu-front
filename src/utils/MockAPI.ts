// 가게 추가 mock api
import { RestaurantType, RoomType } from '../types';

export async function addRestaurantAPI(
  request: string,
): Promise<RestaurantType> {
  const result = new Promise<RestaurantType>(resolve => {
    const time = Math.random() * 500 + 200;
    setTimeout(() => {
      const response: RestaurantType = {
        id: Math.random(),
        restaurantName: request,
        agreeCount: Math.ceil(Math.random() * 10),
        disagreeCount: Math.ceil(Math.random() * 5),
      };
      resolve(response);
    }, time);
  });

  return result;
}

// 방 추가 mock api
export async function addRoomApi(request: string): Promise<RoomType> {
  const result = new Promise<RoomType>(resolve => {
    const time = Math.random() * 500 + 200;
    setTimeout(() => {
      const response: RoomType = {
        id: Math.random(),
        roomName: request,
        restaurants: [],
      };
      resolve(response);
    }, time);
  });

  return result;
}
