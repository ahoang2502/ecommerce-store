"use client";

import { Product } from "@/types";
import IconButton from "./IconButton";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter()

  const handleClick = ()=>{
    router.push(`/product/${data?.id}`)
  }
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4" onClick={handleClick}>
      {/* IMAGES AND ACTIONS */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="image"
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
            
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="font-semibold text-lg">
        <p className="">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>

      {/* PRICE */}
      <div className="flex items-center justify-between ">
        <Currency value={data?.price}/>
      </div>
    </div>
  );
};

export default ProductCard;