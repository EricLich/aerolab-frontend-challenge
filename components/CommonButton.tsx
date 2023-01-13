"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type CommonButtonProps = {
  leftIcon?: ReactNode;
  middleIcon?: ReactNode;
  rightIcon?: ReactNode;
  firstText?: string;
  secondText?: string;
  extraClasses?: string;
  extraHeight?: boolean;
  onClick?: () => any;
  processing?: boolean;
};

const CommonButton: React.FC<CommonButtonProps> = ({
  leftIcon,
  middleIcon,
  rightIcon,
  firstText,
  secondText,
  extraClasses,
  extraHeight,
  onClick,
  processing,
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`w-full h-[40px] lg:h-[60px] rounded-xl lg:rounded-2xl ${
        !processing ? "gradientDefault" : "gradientDefaultNoHover"
      }  text-smDefaultSmall md:text-mdDefault lg:text-lgDefault font-weightDefault leading-default text-neutral0 flex items-center justify-center gap-2  ${
        extraHeight ? "!lg:h-[80px] !h-16" : ""
      } ${processing ? "gradientHeroIllustration50Opacity cursor-not-allowed" : ""} ${
        extraClasses ? extraClasses : ""
      } `}
      onClick={onClick}
      disabled={processing}
    >
      {processing && "Processing..."}
      {leftIcon && !processing && leftIcon}
      {firstText && !processing && firstText}
      {middleIcon && !processing && middleIcon}
      {secondText && !processing && secondText}
      {rightIcon && !processing && rightIcon}
    </motion.button>
  );
};

export default CommonButton;
