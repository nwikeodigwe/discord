"use client";

import ChannelBar from "@/app/components/ChannelBar";
import MessageBar from "@/app/components/MessageBar";
import { usePathname } from "next/navigation";

export default function ServerOne() {
  return (
    <>
      <ChannelBar />
      <MessageBar />
    </>
  );
}
