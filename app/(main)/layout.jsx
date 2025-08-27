"use client";

import { Authenticated } from "convex/react";
import React from "react";
import { useStoreUser } from "@/hooks/use-store-user";


const MainLayout = ({ children }) => {
  useStoreUser();
  return (
    <Authenticated>
      <div className="container mx-auto mt-24 mb-20 px-4">{children}</div>
    </Authenticated>
  );
};

export default MainLayout;