"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonProductCard = () => {
  return (
    <article className="w-full flex flex-col h-[506px] gap-4">
      <section className="flex flex-col border border-neutral300 rounded-lg h-[431px] overflow-hidden">
        <Skeleton className="w-full h-[345px]" baseColor="#E6EDF7" highlightColor="#DAE4F2" />

        <div className="h-[160px] lg:py-3 px-6 flex flex-col items-start justify-center">
          <Skeleton
            count={1}
            className="h-[20px] !w-[180px] bigScreen:w-[228px] mb-1"
            baseColor="#E6EDF7"
            highlightColor="#DAE4F2"
          />

          <Skeleton count={1} className="h-[18px] !w-[150px]" baseColor="#E6EDF7" highlightColor="#DAE4F2" />
        </div>
      </section>
      <Skeleton className="h-[56px] md:h-[59px] !rounded-2xl" baseColor="#E6EDF7" highlightColor="#DAE4F2" />
    </article>
  );
};

export default SkeletonProductCard;
