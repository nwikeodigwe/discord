"use client";
import { useParams, usePathname } from "next/navigation";
import * as Icons from "./icons";
import Link from "next/link";

interface Props {
  channel: {
    id: number;
    icon?: string;
    label: string;
  };
}

export default function Channels({ channel }: Props) {
  const Icon =
    channel.icon && channel.icon in Icons
      ? Icons[channel.icon as keyof typeof Icons]
      : Icons.Hashtag;
  const params = useParams<{ sid: string; cid: string }>();
  const active = +params.cid === +channel.id;
  return (
    <Link href={`/servers/${params.sid}/channels/${channel.id}`}>
      <div
        key={channel.id}
        className={`${
          active === true
            ? "text-white bg-gray-550/[0.32]"
            : "text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16]"
        } flex items-center p-2 mx-2  hover:bg-gray-550/[0.16] transition-all rounded hover:text-gray-100 group`}
      >
        <Icon className="w-5 h-5 mr-1.5 text-gray-400" />
        {channel.label}
        <Icons.AddPerson className="w-4 h-4 text-gray-200 ml-auto opacity-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
