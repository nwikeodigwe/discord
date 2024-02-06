import Link from "next/link";
import * as Icon from "./components/icons";

export default function Home() {
  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-4 shadow-md flex items-center font-title font-semibold h-12 text-[15px] hover:bg-gray-550/[0.16] transition">
          <div className="relative w-4 h-4 mr-1">
            <Icon.Verified className="w-4 h-4 text-gray-550 absolute" />
            <Icon.Check className="w-4 h-4 absolute" />
          </div>
          Tailwind CSS
          <Icon.Chevron className="w-[18px] h-[18px] ml-auto opacity-80" />
        </div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2 text-gray-300"></div>
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
