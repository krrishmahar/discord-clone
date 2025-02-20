'use client'

import { CreateServerModel } from "@/components/models/create-server-model"
import { useState, useEffect } from "react";


export const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted){
        return null;
    }
  return (
    <>
        <CreateServerModel />
    </>
  )
};