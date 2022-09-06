export type RestaurantType = {
  id: number;
  restaurantName: string;
  agreeCount: number;
  disagreeCount: number;
}

export type RoomType = {
  id: number;
  roomName: string;
  restaurants: Array<RestaurantType>
}