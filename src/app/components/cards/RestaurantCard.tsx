import React from "react";
import Image from "next/image";
import StarIcon from "@components/icons/StarIcon";

// Define a type for the props that your component will accept
interface RestaurantCardProps {
  imageUrl: string;
  altText: string;
  name: string;
  rating: number;
  cuisineType: string;
  deliveryTime: string;
}

// Functional component using destructured props for better readability
const RestaurantCard: React.FC<RestaurantCardProps> = ({
  imageUrl,
  altText,
  name,
  rating,
  cuisineType,
  deliveryTime,
}) => {
  return (
    <div className="w-[492px] h-[409px] flex flex-col">
      <Image
        className="w-full h-[307px] rounded-[14px] shadow-xl"
        src={imageUrl}
        alt={altText}
        width={492}
        height={307}
        quality={100}
      />
      <div className="grid grid-rows-2 items-center mt-4">
        <div className="grid grid-cols-2">
          <div className="text-black text-[40px] font-bold whitespace-nowrap">
            {name}
          </div>
          <div className="flex justify-end items-center">
            <div className="text-neutral-500 text-[28px]">
              {rating.toFixed(1)}
            </div>
            <StarIcon width="18" height="18" className="ml-2" />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="text-neutral-500 text-[28px] mt-1 whitespace-nowrap">
            {cuisineType}
          </div>
          <div className="text-neutral-500 text-[28px] justify-self-end place-self-end">
            {deliveryTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
