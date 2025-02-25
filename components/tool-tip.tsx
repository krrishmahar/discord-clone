'use client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import React from "react";

interface ActionTooltip {
    label:string;
    children: React.ReactNode;
    side?: "top" | "bottom" | "right" | "left";
    align?: "start" | "center" | "end";
}

const ActionTooltip = ({ label, children, side, align }: ActionTooltip) => {
  return (
    <TooltipProvider>
        <Tooltip delayDuration={50}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side={side} align={align}>
                <p className="font-semibold text-sm capitalize ">
                    {label.toLowerCase()}
                </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default ActionTooltip;