'use client'
import React from 'react'

import { useClerk } from '@clerk/nextjs'
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function Home(){
    const  {signOut} = useClerk();
    return (
        <div>
            
            <ModeToggle />
            <Button onClick={()=> {signOut()}}>Open User page</Button>
        </div>
    )
}