"use client";

import React, { ReactNode } from "react";

type WithWavePatternBGProps = {
  children: ReactNode;
};

const WithWavePatternBG: React.FC<WithWavePatternBGProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default WithWavePatternBG;
