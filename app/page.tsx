import Image from "next/image";

export default function Home() {
  return (
    <div className="flex text-white h-screen">
      <div className="bg-gray-800 p-4">
        <div className="bg-white text-gray-800 h-12 w-12 rounded-3xl flex items-center justify-center">
          TW
        </div>
      </div>
      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="p-4 shadow-md">Tailwind css</div>
        <div className="p-4 flex-1">channels</div>
      </div>
      <div className="bg-gray-600 flex-1 flex-col">
        <div className="p-4 shadow-md">Main</div>
        <div className="p-4 flex-1">Content</div>
      </div>
    </div>
  );
}
