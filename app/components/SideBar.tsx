"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as Icons from "./icons";
import NavLink from "./NavLink";

const servers = [
  { id: "1", img: "tailwind.png" },
  { id: "2", img: "next.png" },
  { id: "3", img: "mirage.png" },
];

export default function SideBar() {
  const router = usePathname();
  return (
    <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
      <NavLink href="/">
        <Icons.Discord className="h-5 w-7" />
      </NavLink>
      <hr className="border-t-white/[.06] border-t-2 rounded mx-2" />
      {servers.map((server) => (
        <NavLink key={server.id} href={`/servers/${server.id}`}>
          <Image
            src={`/servers/${server.img}`}
            alt="Tailwind"
            width={50}
            height={50}
          />
        </NavLink>
      ))}
    </div>
  );
}
