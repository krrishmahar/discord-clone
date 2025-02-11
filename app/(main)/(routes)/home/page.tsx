'use client'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

import { useClerk } from '@clerk/nextjs'
import { Button } from '@/components/ui/button';

export default function Home(){
    const  {signOut} = useClerk();
    return (
        <div>
            <Button onClick={()=> {signOut()}}>Open User page</Button>
            {/* <UserButton afterSignOutUrl='/'/> */}
        </div>
    )
}