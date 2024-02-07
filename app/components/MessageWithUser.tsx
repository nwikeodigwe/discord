import Image from "next/image";

interface Props {
  message: {
    avatarUrl: string;
    user: string;
    date: string;
    text: string;
  };
}

export default function MessageWithUser({ message: message }: Props) {
  return (
    <div className="leading-[22px] mt-[17px] flex pl-4 pr-16 py-0.5 hover:bg-gray-950/[.07]">
      <Image
        className="w-10 h-10 mr-4 rounded-full mt-0.5"
        src={message.avatarUrl}
        alt=""
        width={10}
        height={10}
      />
      <div>
        <p className="flex items-baseline">
          <span className="mr-2 font-medium text-green-400">
            {message.user}
          </span>
          <span className="text-xs font-medium text-gray-400">
            {message.date}
          </span>
        </p>
        <p className="text-gray-100">{message.text}</p>
      </div>
    </div>
  );
}
