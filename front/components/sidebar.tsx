import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

const itemsMenu = [
  {
    label: "Learn",
    iconSrc: "/flag_br.svg",
    href: "/learn",
  },
  {
    label: "LeaderBoard",
    iconSrc: "/flag_es.svg",
    href: "/leaderboard",
  },
  {
    label: "quests",
    iconSrc: "/flag_fr.svg",
    href: "/quests",
  },
  {
    label: "shop",
    iconSrc: "/flag_hr.svg",
    href: "/shop",
  },
];

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot_green.png" height={40} width={40} alt="mascot" />
          <h1 className="text-2xl font-extrabold text-primaryCobald tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        {itemsMenu.map((item, index) => (
          <SidebarItem
            key={index}
            label={item.label}
            iconSrc={item.iconSrc}
            href={item.href}
          />
        ))}
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
