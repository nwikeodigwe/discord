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
    <div className="pl-4 pr-16 py-0.5 hover:bg-gray-950/[.07] leading-[22px]">
      <p className="text-gray-100 pl-14">{message.text}</p>
    </div>
  );
}
