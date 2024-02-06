import * as Icons from "./icons";

interface Props {
  channel: {
    id: number;
    icon?: string;
    label: string;
  };
}

export default function Channels({ channel }: Props) {
  const Icon = channel.icon
    ? Icons[channel.icon as keyof typeof Icons]
    : Icons.Hashtag;
  return (
    <div
      key={channel.id}
      className="flex items-center p-2 mx-2  hover:bg-gray-550/[0.16] transition-all rounded hover:text-gray-100 group"
    >
      <Icon className="w-5 h-5 mr-1.5 text-gray-400" />
      {channel.label}
      <Icons.AddPerson className="w-4 h-4 text-gray-200 ml-auto opacity-0 group-hover:opacity-100" />
    </div>
  );
}
