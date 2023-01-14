"use client";

import React, { ReactNode } from "react";

type WithWavePatternBGProps = {
  children: ReactNode;
};

const WithWavePatternBG: React.FC<WithWavePatternBGProps> = ({ children }) => {
  return (
    <section className="h-auto relative">
      <div className="absolute -top-15 -z-50 bg-[url(/assets/illustrations/single-wave-pattern-big.svg)] w-[400%] h-[75%] -left-[50%] -rotate-3 opacity-30"></div>
      <div className="mainContainer w-full flex flex-col items-center">{children}</div>
    </section>
  );
};

export default WithWavePatternBG;
