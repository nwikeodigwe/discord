import Link from "next/link";
import ChannelBar from "./components/ChannelBar";
import MessageBar from "./components/MessageBar";
import Friends from "./components/Friends";

export default function Home() {
  return (
    <>
      <Friends />
      <MessageBar />
    </>
  );
}
