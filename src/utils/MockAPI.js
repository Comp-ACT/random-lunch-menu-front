// 가게 추가 mock api
export async function addRestaurantAPI(request) {
  const result = new Promise((resolve) => {
    const time = Math.random() * 2000 + 200;
    setTimeout(() => {
      const response = {
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
export async function addRoomApi(request) {
  const result = new Promise((resolve) => {
    const time = Math.random() * 2000 + 200;
    setTimeout(() => {
      const response = {
        id: Math.random(),
        roomName: request.roomName,
      };
      resolve(response);
    }, time);
  });

  return result;
}
