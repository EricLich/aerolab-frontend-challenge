"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [repoLinkClicked, setRepoLinkClicked] = useState<boolean>(false);

  return (
    <footer className="w-full flex items-center justify-center h-[120px] lg:h-[200px] ">
      <Link
        href="https://github.com/EricLich/aerolab-frontend-challenge"
        target="_blank"
        className={`flex items-center gap-2 text-lgDefault font-weightDefault text-neutral600`}
        onClick={() => setRepoLinkClicked(true)}
      >
        {!repoLinkClicked ? (
          <Image src={"/assets/icons/github-default.svg"} alt="github icon" width={24} height={24} />
        ) : (
          <Image src={"/assets/icons/github-active.svg"} alt="github icon" width={24} height={24} />
        )}
        <span className={`${repoLinkClicked ? "bg-clip-text text-transparent gradientDefaultNoHover" : ""}`}>
          View this repository
        </span>
      </Link>
    </footer>
  );
};

export default Footer;
