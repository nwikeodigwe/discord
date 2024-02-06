import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavLink({
  active,
  href,
  children,
}: {
  active?: boolean;
  href: string;
  children: ReactNode;
}) {
  const router = usePathname();
  active ||= router === href;
  return (
    <div>
      <Link href={href}>
        <div className="relative block group">
          <div className="absolute flex items-center h-full -left-3">
            <div
              className={`${
                active
                  ? "h-10"
                  : "opacity-0 h-5 group-hover:opacity-100 scale-0 group-hover:scale-100"
              } w-1  bg-white rounded-r  origin-left transition-all duration-200`}
            ></div>
          </div>
          <div className="group-active:translate-y-px">
            <div
              className={`${
                active
                  ? "rounded-2xl bg-brand text-white"
                  : "bg-gray-700 text-white transition-all duration-200 group-hover:bg-brand h-12 w-12 rounded-3xl"
              }  group-hover:rounded-2xl flex items-center justify-center w-12 h-12 transition-all duration-200 overflow-hidden`}
            >
              {children}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
