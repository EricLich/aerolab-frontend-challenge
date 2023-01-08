"use client";

import React, { ReactNode } from "react";

type CommonButtonProps = {
  leftIcon?: ReactNode;
  middleIcon?: ReactNode;
  rightIcon?: ReactNode;
  firstText?: string;
  secondText?: string;
  extraClasses?: string;
  extraHeight?: boolean;
};

const CommonButton: React.FC<CommonButtonProps> = ({
  leftIcon,
  middleIcon,
  rightIcon,
  firstText,
  secondText,
  extraClasses,
  extraHeight,
}) => {
  return (
    <button
      className={`w-full h-[40px] lg:h-[60px] rounded-xl lg:rounded-2xl gradientDefault hover:gradientDefaultHover text-smDefaultSmall md:text-mdDefault lg:text-lgDefault font-weightDefault leading-default text-neutral0 flex items-center justify-center gap-2 ${
        extraClasses ? extraClasses : ""
      } ${extraHeight ? "!lg:h-[80px] !h-16" : ""}`}
    >
      {leftIcon && leftIcon}
      {firstText && firstText}
      {middleIcon && middleIcon}
      {secondText && secondText}
      {rightIcon && rightIcon}
    </button>
  );
};

export default CommonButton;
