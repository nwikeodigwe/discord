import * as Icon from "./icons";
import Channels from "./Channels";
import { data } from "../../data";

export default function ChannelBar() {
  return (
    <div className="bg-gray-800 w-60 flex flex-col">
      <div className="px-4 shadow-md flex items-center font-title font-semibold h-12 text-[15px] hover:bg-gray-550/[0.16] transition">
        <div className="relative w-4 h-4 mr-1">
          <Icon.Verified className="w-4 h-4 text-gray-550 absolute" />
          <Icon.Check className="w-4 h-4 absolute" />
        </div>
        Tailwind CSS
        <Icon.Chevron className="w-[18px] h-[18px] ml-auto opacity-80" />
      </div>
      <div className="flex-1 overflow-y-scroll font-medium text-gray-300 mt-3 space-y-[21px]">
        {data[0].categories.map((category) => (
          <div key={category.id}>
            {category.label && (
              <div className="px-1 font-title flex items-center uppercase text-xs tracking-wide">
                <Icon.Arrow className="w-3 h-3" />
                {category.label}
              </div>
            )}
            <div className="space-y-[0.5px] mt-[5px]">
              {category.channels.map((channel) => (
                <Channels channel={channel} key={channel.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
