"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icons from "./icons";

export default function SideBar() {
  const router = usePathname();
  return (
    <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
      <div>
        <Link href="/">
          <div
            className={`${
              router === "/" ? "rounded-2xl bg-brand text-white" : ""
            } bg-gray-700 text-white transition-all duration-200 hover:bg-brand h-12 w-12 rounded-3xl hover:rounded-2xl flex items-center justify-center`}
          >
            <Icons.Discord className="h-5 w-7" />
          </div>
        </Link>
      </div>
      <div>
        <Link href="/servers/1">
          <div className="bg-gray-700 text-white transition-all duration-200 hover:bg-brand h-12 w-12 rounded-3xl hover:rounded-2xl flex items-center justify-center">
            ts
          </div>
        </Link>
      </div>
    </div>
  );
}
