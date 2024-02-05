import Link from "next/link";
import * as Icon from "./components/icons";

export default function Home() {
  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="p-3 shadow-md flex items-center font-title">
          Tailwind css
        </div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2 text-gray-300">
          <p className="text-white"> Channel (unread)</p>
          <p className="text-white"> Channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p key={i}>Channel {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex flex-1  flex-col">
        <div className="px-3 h-12 flex items-center shadow-md">General</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2 text-gray-100">
          {[...Array(40)].map((_, i) => (
            <p key={i}>
              Message {i}. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Distinctio sunt hic nulla nesciunt quia perferendis
              explicabo a voluptas saepe eum odit magnam aspernatur, molestiae
              aut. Officia dolorem assumenda neque, facere sequi voluptatem quo,
              temporibus illum laudantium alias impedit unde magni!
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
