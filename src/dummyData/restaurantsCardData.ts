import getPlaceholderImageUrl from "@/app/utils/getPlaceholderImageUrl";
import { RestaurantData } from "./frontpageCardData";

const restaurantCardData = [
  {
    imageUrl: getPlaceholderImageUrl({ height: 307, width: 492 }), // "/images/rodeo_grill.jpg",
    altText: "Rodeo Grill",
    name: "Rodeo Grill",
    rating: 4.5,
    cuisineType: "Parrilla y variedad",
    deliveryTime: "15-20min",
  },
  {
    imageUrl: getPlaceholderImageUrl({ height: 307, width: 492 }), // "/images/prime_burger.jpg",
    altText: "Prime Burger",
    name: "Prime Burger",
    rating: 4.5,
    cuisineType: "Parrilla y variedad",
    deliveryTime: "12-20min",
  },
  {
    imageUrl: getPlaceholderImageUrl({ height: 307, width: 492 }), // "/images/sanders_chicken.jpg",
    altText: "Sander’s Chicken",
    name: "Sander’s Chicken",
    rating: 4.5,
    cuisineType: "Parrilla y variedad",
    deliveryTime: "12-20min",
  },
  {
    imageUrl: getPlaceholderImageUrl({ height: 307, width: 492 }), // "/images/viva_mexico.jpg",
    altText: "Viva Mexico",
    name: "Viva Mexico",
    rating: 4.5,
    cuisineType: "Comida mexicana",
    deliveryTime: "10-14min",
  },
  {
    imageUrl: getPlaceholderImageUrl({ height: 307, width: 492 }), // "/images/gran_napoles.jpg",
    altText: "Gran Napoles",
    name: "Gran Napoles",
    rating: 4.5,
    cuisineType: "Comida italiana",
    deliveryTime: "12-15min",
  },
  {
    imageUrl: getPlaceholderImageUrl({ height: 307, width: 492 }), // "/images/casa_valencia.jpg",
    altText: "Casa Valencia",
    name: "Casa Valencia",
    rating: 4.5,
    cuisineType: "Comida española",
    deliveryTime: "15-24min",
  },
  {
    imageUrl: getPlaceholderImageUrl({ height: 307, width: 492 }), // "/images/chinatown.jpg",
    altText: "Chinatown",
    name: "Chinatown",
    rating: 4.5,
    cuisineType: "Comida china",
    deliveryTime: "15-20min",
  },
  {
    imageUrl: getPlaceholderImageUrl({ height: 307, width: 492 }), // "/images/el_arabito.jpg",
    altText: "El Arabito",
    name: "El Arabito",
    rating: 4.5,
    cuisineType: "Comida arabe",
    deliveryTime: "12-20min",
  },
  {
    imageUrl: getPlaceholderImageUrl({ height: 307, width: 492 }), // "/images/kyoto.jpg",
    altText: "Kyoto",
    name: "Kyoto",
    rating: 4.5,
    cuisineType: "Comida japonesa",
    deliveryTime: "12-20min",
  },
] as RestaurantData[];

export default restaurantCardData;
