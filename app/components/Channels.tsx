"use client";
import { useParams, usePathname } from "next/navigation";
import * as Icons from "./icons";
import Link from "next/link";

interface Props {
  channel: {
    id: number;
    icon?: string;
    label: string;
    unread?: boolean;
  };
}

export default function Channels({ channel }: Props) {
  const Icon =
    channel.icon && channel.icon in Icons
      ? Icons[channel.icon as keyof typeof Icons]
      : Icons.Hashtag;
  const params = useParams<{ sid: string; cid: string }>();
  const active = +params.cid === +channel.id;
  const state = active
    ? "active"
    : channel?.unread
    ? "inactiveUnread"
    : "inactiveRead";

  const classes = {
    active: "text-white bg-gray-550/[0.32]",
    inactiveUnread:
      "text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]",
    inactiveRead:
      "text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16]active:bg-gray-550/[0.24]",
  };
  return (
    <Link href={`/servers/${params.sid}/channels/${channel.id}`}>
      <div
        key={channel.id}
        className={`${classes[state]} flex items-center p-2 mx-2  hover:bg-gray-550/[0.16] transition-all rounded hover:text-gray-100 group relative`}
      >
        {state == "inactiveUnread" && (
          <div className="absolute w-1 h-2 bg-white left-0 -ml-2 rounded-r-3xl"></div>
        )}
        <Icon className="w-5 h-5 mr-1.5 text-gray-400" />
        {channel.label}
        <Icons.AddPerson className="w-4 h-4 text-gray-200 ml-auto opacity-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
