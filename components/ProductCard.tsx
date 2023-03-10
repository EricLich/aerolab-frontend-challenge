"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import { toast } from "react-toastify";

import CommonButton from "./CommonButton";
import { getUser } from "../api/user.api";
import { Product } from "../utils/types";
import { redeemProduct } from "../api/products.api";
import ToastMessage from "./ToastMessage";
import { useUserStore } from "../store/userStore";

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
      toast(<ToastMessage higlightPart={`${product.name}`} message="redeemed successfully" type="success" />);
      setProcessing(false);
    } catch (err) {
      toast(<ToastMessage message="There was an error with the transaction" type="error" />);
      setProcessing(false);
    }
  };

  return (
    <article className="w-full flex flex-col h-[506px] gap-4">
      <section className="flex flex-col border border-neutral300 rounded-lg h-[431px] overflow-hidden">
        <Image
          src={product.img.hdUrl}
          alt={`${product.name} image`}
          width={350}
          height={350}
          className="w-full min-h-[80%] object-contain border-b border-neutral300"
        />
        <div className="h-full lg:py-4 px-6 flex flex-col items-start justify-center">
          <h4 className="text-smDefault md:text-mdDefault lg:text-lgDefault font-weightDefault">{product.name}</h4>
          <p className="text-smDefault md:text-mdDefault lg:text-lgDefaultSmall font-weightDefault text-neutral600">
            {product.category}
          </p>
        </div>
      </section>
      <CommonButton
        firstText={user.points >= product.cost ? "Redeem for" : "You need"}
        middleIcon={kiteIcon}
        secondText={product.cost.toLocaleString("de-DE")}
        extraClasses={`sm:text-smDefault h-[56px] md:h-[59px] rounded-2xl ${
          user.points < product.cost ? "!bg-none !bg-neutral200" : ""
        }`}
        onClick={reedem}
        processing={processing}
        disabled={user.points < product.cost}
      />
    </article>
  );
};

export default ProductCard;
