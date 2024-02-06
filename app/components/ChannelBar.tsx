import * as Icon from "./icons";
import Channels from "./Channels";
import { data } from "../../data";
import { useState } from "react";

export default function ChannelBar() {
  const [closedCategories, setClosedCategories] = useState<any>([]);

  console.log(closedCategories);

  const togglecategory = (categoryId: any) => {
    setClosedCategories((closedCategories: string[]) => {
      return closedCategories.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...closedCategories, categoryId];
    });
  };

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
              <div
                onClick={() => togglecategory(category.id)}
                className="px-1 font-title flex items-center uppercase text-xs tracking-wide hover:text-gray-100 w-full cursor-pointer"
              >
                <Icon.Arrow
                  className={`${
                    closedCategories.includes(category.id) ? "-rotate-90" : ""
                  } w-3 h-3 transition duration-200`}
                />
                {category.label}
              </div>
            )}
            <div className="space-y-[0.5px] mt-[5px]">
              {category.channels
                .filter((channel) => {
                  const categoryIsOpen = !closedCategories.includes(
                    category.id
                  );
                  return categoryIsOpen;
                })
                .map((channel) => (
                  <Channels channel={channel} key={channel.id} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
