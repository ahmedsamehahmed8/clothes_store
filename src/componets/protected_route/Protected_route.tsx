"use client";

import React from "react";
import { useAppSelector } from "@/store/hooks/hooks_store";
import { useRouter } from "next/router";

function Protected_route({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.user_auth);
  if (token) {
    return <>{children}</>;
  }
  return router.push("/home");
}

export default Protected_route;
