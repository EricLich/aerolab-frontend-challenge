"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import { useUserStore } from "../store/userStore";
import { Product } from "../utils/types";
import CommonButton from "./CommonButton";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { user } = useUserStore((store) => store);
  const kiteIcon = useMemo(() => {
    if (user.points >= product.cost) {
      return <Image src="/assets/icons/aeropay-3.svg" alt="aero logo" width={24} height={24} />;
    }
    return <Image src="/assets/icons/aeropay-4.svg" alt="aero logo" width={24} height={24} />;
  }, [user.points]);

  const redeemProduct = (): void => {
    try {
    } catch (err) {}
  };

  return (
    <article className="w-full flex flex-col lg:h-[506px] lg:gap-4">
      <section className="flex flex-col border border-neutral300 rounded-lg lg:h-[431px] overflow-hidden">
        <Image
          src={product.img.hdUrl}
          alt={`${product.name} image`}
          width={350}
          height={350}
          className="lg:h-[80%] object-contain border-b border-neutral300"
        />
        <div className="lg:py-4 lg:px-6 flex flex-col items-start">
          <h4 className="text-lgDefault font-weightDefault">{product.name}</h4>
          <p className="text-lgDefaultSmall font-weightDefault text-neutral600">{product.category}</p>
        </div>
      </section>
      <CommonButton
        firstText={user.points >= product.cost ? "Redeem for" : "You need"}
        middleIcon={kiteIcon}
        secondText={product.cost.toLocaleString("de-DE")}
        extraClasses={user.points < product.cost ? "!bg-none !bg-neutral200" : ""}
        onClick={redeemProduct}
      />
    </article>
  );
};

export default ProductCard;
