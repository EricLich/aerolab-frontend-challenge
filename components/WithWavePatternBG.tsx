"use client";

import React, { ReactNode } from "react";

type WithWavePatternBGProps = {
  children: ReactNode;
};

const WithWavePatternBG: React.FC<WithWavePatternBGProps> = ({ children }) => {
  return (
    <section className="h-auto">
      {/* <div className=" bg-[url(/assets/illustrations/single-wave-pattern.svg)] w-[300%] h-[100px] -rotate-3"></div> */}
      <div className="mainContainer w-full flex flex-col items-center">{children}</div>
    </section>
  );
};

export default WithWavePatternBG;
