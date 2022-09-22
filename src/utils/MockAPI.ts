import { RestaurantType, RoomType } from '../types';
import axios from 'axios';

// 가게 추가 mock api
export async function addRestaurantAPI(
  request: string,
): Promise<RestaurantType> {
  return new Promise<RestaurantType>(resolve => {
    const time = Math.random() * 500 + 200;
    setTimeout(() => {
      const response: RestaurantType = {
        id: Math.random(),
        restaurantName: request,
        agreeCount: Math.ceil(Math.random() * 5),
        disagreeCount: Math.ceil(Math.random() * 2),
      };
      resolve(response);
    }, time);
  });
}

// 방 추가 mock api
export async function addRoomApi(request: string): Promise<RoomType> {
  return new Promise<RoomType>(resolve => {
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
}

// Access Token 재발급 함수
export async function reIssuanceAccessToken(
  callback: (accessToken: string) => void,
) {
  // refreshToken이 쿠키에 들어있다는 가정하에 진행해야겠지?
  axios
    .post('')
    .then(response => callback(response.data.accessToken))
    .catch(error => console.log(error));
}
