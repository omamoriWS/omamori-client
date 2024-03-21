"use client";
import React from "react";
import { useRouter } from "../../../node_modules/next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <div>
      <h1>페이지</h1>
    </div>
  );
};

export default page;
