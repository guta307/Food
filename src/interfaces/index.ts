export interface Restaurant {
  name: string;
  categories: string[];
  deliveryTime: string;
  deliveryCost: string;
  imageUri: string;
  iconUri: string;
  id: number;
}

export interface Dish {
  name: string;
  categories: string[];
  ingredients: string;
  value: number;
  imageUri: string;
  id: number;
  description: string;
  restaurantId: number;
}
