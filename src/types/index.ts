export type Restaurant = {
  id: number;
  restaurantName: string;
  agreeCount: number;
  disagreeCount: number;
}

export type Room = {
  id: number;
  roomName: string;
  restaurants: Array<Restaurant>
}