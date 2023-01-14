"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type ToastMessageProps = {
  type: "success" | "error";
  higlightPart?: string;
  message: string;
};

const ToastMessage: React.FC<ToastMessageProps> = ({ message, higlightPart, type }) => {
  const renderIcon = (): JSX.Element => {
    if (type === "success") {
      return <Image src="/assets/icons/system-success.svg" alt="success icon" width={32} height={32} />;
    }

    return <Image src="/assets/icons/system-error.svg" alt="success icon" width={32} height={32} />;
  };

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className={`lg:min-w-[532px] gap-5 bg-neutral0 h-full flex items-center justify-between p-4 border-2 rounded-xl ${
        type === "success" ? " border-greenDefault" : "border-redDefault"
      }`}
    >
      <div className="flex items-center gap-3">
        {renderIcon()}{" "}
        <p className="text-smDefault md:text-lgDefault font-weightDefault text-neutral600">
          {higlightPart && <span className="text-neutral900">{higlightPart}</span>} {message}
        </p>
      </div>
      <Image src="/assets/icons/cross-default.svg" alt="success icon" width={24} height={24} />
    </motion.div>
  );
};

export default ToastMessage;
