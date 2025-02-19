import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";
import NavigationAction from "./navigation-action";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import NavigationItem from "./navigation-item";
import { ModeToggle } from "../ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";

const NavigationSidebar = async () => {
  // Await the currentProfile function and extract the profile
  const currentProfileResult = await currentProfile();
  const profile = currentProfileResult?.profile;

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  return (
    <div className="space-y-4  h-full flex flex-col  w-full text-primary dark:bg-[#1E1F22] py-3">
      <NavigationAction />
      <Separator
        className="h-[2px] bg-zinc-300 dark:bg-zinc-700 
    rounded-md w-10 mx-auto"
      />
      <ScrollArea className="flex-1 w-full ">
        {servers.map((server) => (
          <div key={server.id}>
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center justify-center flex-col gap-y-4 ">
        <ModeToggle />
        <UserButton
          afterSwitchSessionUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]",
            },
          }}
        />
      </div>
    </div>
  );
};

export default NavigationSidebar;
