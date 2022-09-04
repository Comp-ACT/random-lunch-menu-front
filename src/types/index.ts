export type Restuarant = {
  id: number;
  restaurantName: string;
  agreeCount: number;
  disagreeCount: number;
}

export type Room = {
  id: number;
  roomName: string;
  restaurants: Array<Restuarant>
}