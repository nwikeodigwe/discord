import Image from "next/image";

export default function Home() {
  return (
    <div className="flex text-white h-screen">
      <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="bg-white text-gray-800 h-12 w-12 rounded-3xl flex items-center justify-center"
          >
            {i}
          </div>
        ))}
      </div>
      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="p-3 shadow-md flex items-center">Tailwind css</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2">
          {[...Array(40)].map((_, i) => (
            <p key={i}>Channel {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-600 flex flex-1  flex-col">
        <div className="px-3 h-12 flex items-center shadow-md">General</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2">
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
    </div>
  );
}
