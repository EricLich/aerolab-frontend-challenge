"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";

import CommonButton from "./CommonButton";
import { useUserStore } from "../store/userStore";
import { Product } from "../utils/types";
import { redeemProduct } from "../api/products.api";
import { getUser } from "../api/user.api";
import { toast } from "react-toastify";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { user, setFetchedUser } = useUserStore((store) => store);
  const [processing, setProcessing] = useState<boolean>(false);
  const kiteIcon = useMemo(() => {
    if (user.points >= product.cost) {
      return <Image src="/assets/icons/aeropay-3.svg" alt="aero logo" width={24} height={24} />;
    }
    return <Image src="/assets/icons/aeropay-4.svg" alt="aero logo" width={24} height={24} />;
  }, [user.points]);

  const reedem = async (): Promise<void> => {
    setProcessing(true);
    try {
      const res = await redeemProduct(product._id);
      const updatedUser = await getUser();
      setFetchedUser(updatedUser);
      toast.success(`${product.name} redeemed successfully`);
      setProcessing(false);
    } catch (err) {
      toast.error("There was a problem with the transaction");
      setProcessing(false);
    }
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
        onClick={reedem}
        processing={processing}
      />
    </article>
  );
};

export default ProductCard;
