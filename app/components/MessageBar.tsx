"use client";
import { useParams } from "next/navigation";
import * as Icon from "../components/icons";
import MessageWithUser from "./MessageWithUser";
import Message from "./Message";
import { data } from "../../data";
import { Channel } from "./Channel";

export default function MessageBar() {
  const params = useParams<{ sid: string; cid: string }>();
  const server = data.find((server) => +server.id === +params.sid);
  const channel: Channel = server?.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => +channel.id === +params.cid) as Channel;
  console.log(channel);
  return (
    <div className="flex flex-col flex-1 flex-shrink min-w-0 bg-gray-700">
      <div className="flex items-center h-12 px-2 shadow-sm">
        <div className="flex items-center">
          <Icon.Hashtag className="w-6 h-6 mx-2 font-semibold text-gray-400" />
          <span className="mr-2 text-white font-title whitespace-nowrap">
            {channel.label}
          </span>
        </div>

        {channel.description && (
          <>
            <div className="w-px h-6 mx-2 bg-white/[.06]"></div>
            <div className="mx-2 text-sm font-medium text-gray-200 truncate">
              {channel.description}
            </div>
          </>
        )}

        <div className="flex items-center ml-auto">
          <button className="text-gray-200 hover:text-gray-100">
            <Icon.HashtagWithSpeechBubble className="w-6 h-6 mx-2" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icon.Bell className="w-6 h-6 mx-2" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icon.Pin className="w-6 h-6 mx-2" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icon.People className="w-6 h-6 mx-2" />
          </button>
          <div className="mx-2 relative">
            <input
              type="text"
              className="bg-gray-900 rounded border-none h-6 w-36 text-sm font-medium placeholder-gray-200 px-1.5 focus:outline-none focus:w-60 transition-all duration-200"
              placeholder="Search"
            />
            <div className="absolute right-0 inset-y-0 flex items-center">
              <Icon.Spyglass className="w-4 h-4 mr-1 text-gray-400" />
            </div>
          </div>
          <button className="text-gray-200 hover:text-gray-100">
            <Icon.Inbox className="w-6 h-6 mx-2" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icon.QuestionCircle className="w-6 h-6 mx-2" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll">
        {channel?.messages.map((message, i) => (
          <div key={message.id}>
            {i === 0 || message.user !== channel?.messages[i - 1].user ? (
              <MessageWithUser message={message} />
            ) : (
              <Message message={message} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
