"use client";
import React from "react";
import { useRouter } from "../../../node_modules/next/navigation";
import { useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const { category } = useSelector((state: any) => state.userReducer);
  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
};

export default page;
