"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import * as Icons from "./icons";
import NavLink from "./NavLink";
import { data } from "../../data";

export default function SideBar() {
  const params = useParams<{ sid: string; cid: string }>();
  return (
    <div className="hidden md:block bg-gray-900 p-3 space-y-2 overflow-y-scroll">
      <NavLink href="/">
        <Icons.Discord className="h-5 w-7" />
      </NavLink>
      <hr className="border-t-white/[.06] border-t-2 rounded mx-2" />
      {data.map((server) => (
        <NavLink
          key={server.id}
          active={+params.sid === +server.id}
          href={`/servers/${server.id}/channels/${server.categories[0].channels[0].id}`}
        >
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
