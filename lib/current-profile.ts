import { currentUser } from "@clerk/nextjs/server"

import { db } from "@/lib/db";

export const currentProfile = async () => {
    const user_id = await currentUser();

    if (!user_id){
        return null 
    }

    const profile = await db.profile.findUnique({
        where: {
            userId: user_id.id
        }
    })

    return { profile };
}