"use client";

import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

import { AddPointsApiResponse, PossiblePointRefillAmounts } from "../utils/types";
import CommonButton from "./CommonButton";
import CreditCard from "./CreditCard";
import PointRefillSelector from "./PointRefillSelector";
import { refillUserPoints } from "../api/user.api";
import ToastMessage from "./ToastMessage";
import { useUserStore } from "../store/userStore";
import { Popover, Transition } from "@headlessui/react";

const UserMenu = () => {
  const { addPoints } = useUserStore((store) => store);
  const [selectedRefillValue, setSelectedRefillValue] = useState<PossiblePointRefillAmounts>(5000);
  const [processing, setProcessing] = useState<boolean>(false);

  const leftButtonIcon = (
    <Image src="/assets/icons/aeropay-3.svg" width={24} height={24} alt="aeropay icon" quality={80} />
  );

  const handleRefillPoints = async (): Promise<void> => {
    setProcessing(true);
    try {
      const user: AddPointsApiResponse = await refillUserPoints(selectedRefillValue);
      addPoints(user["New Points"]);
      toast(<ToastMessage message="Points added!" type="success" />);
      setProcessing(false);
    } catch (error) {
      toast(<ToastMessage message="There was an error adding points" type="error" />);
      setProcessing(false);
    }
  };

  return (
    <Popover.Panel className="absolute z-50 bg-neutral0 top-[120%] w-[220px] md:w-[250px] lg:w-[321px] h-[300px] md:h-[320px] lg:h-[430px] right-0 border border-neutral300 shadow-sm rounded-2xl">
      <div className="w-full p-3 md:p-4 lg:p-6 border-b border-neutral200">
        <p className="text-smDefault md:text-mdDefault lg:text-lgDefault font-weightDefault leading-default">
          Add Balance
        </p>
      </div>
      <div className="flex flex-col items-center p-3 md:p-4 lg:p-6">
        <CreditCard />
        <PointRefillSelector
          selectedRefillValue={selectedRefillValue}
          setSelectedRefillValue={setSelectedRefillValue}
        />
        <CommonButton
          firstText="Add Points"
          leftIcon={leftButtonIcon}
          onClick={handleRefillPoints}
          processing={processing}
        />
      </div>
    </Popover.Panel>
  );
};

export default UserMenu;
