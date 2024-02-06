"use client";

import { usePathname } from "next/navigation";

export default function ServerOne() {
  const path = usePathname();
  const name = path.split("/");
  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="p-3 shadow-md flex items-center font-title">
          Server {name[name.length - 1]}
        </div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2 text-gray-300">
          {/* <p className="text-white"> Channel (unread)</p>
          <p className="text-white"> Channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p key={i}>Channel {i}</p>
          ))} */}
        </div>
      </div>
      <div className="bg-gray-700 flex flex-1  flex-col">
        <div className="px-3 h-12 flex items-center shadow-md">General</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2 text-gray-100"></div>
      </div>
    </>
  );
}
