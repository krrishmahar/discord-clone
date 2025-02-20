"use client";
import { useParams, useRouter } from "next/navigation";
import ActionTooltip from "@/components/tool-tip";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface NavigationItemProp {
  id: string;
  imageUrl: string;
  name: string;
}

const NavigationItem = ({ id, imageUrl, name }: NavigationItemProp) => {
    const params = useParams();
    const router = useRouter();

    const onClick = ()=> {
        router.push(`/servers/${id}`)
    }
    console.log(params, id)

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button onClick={onClick} className="group relative flex items-center py-2">
        <div className={cn("absolute left-0 bg-zinc-950 dark:bg-white rounded-r-full  transistion-all w-[4px]", 
        params?.serverId !== id && "group-hover:h-[20px]"
            ,params?.serverId === id ? "h-[36px]" : "h[8px]"
        )} />
        <div className={cn(
            "relative group flex group-hover:rounded-[16px] rounded-[24px] transistion-all overflow-hidden mx-3 h-[48px] w-[48px] ",
            params.serverId === id && "bg-primary/10 text-primary  rounded-[16px]"
        )}>
            <Image fill src={imageUrl} alt="channel" />

        </div>
      </button>
    </ActionTooltip>
  );
};

export default NavigationItem;
