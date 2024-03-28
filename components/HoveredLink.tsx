"use client";
import React from "react";
import Link from "next/link";

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
      <Link
        {...rest}
        className="text-neutral-700 dark:text-neutral-200 ">
        {children}
      </Link>
    );
  };