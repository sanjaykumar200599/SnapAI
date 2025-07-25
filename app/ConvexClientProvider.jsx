"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";

import { useAuth } from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export function ConvexClientProvider({ children }) {
  return <ConvexProvider
   client={convex}
   //use Auth
  useAuth={useAuth}>
   
    {children}</ConvexProvider>;
}
