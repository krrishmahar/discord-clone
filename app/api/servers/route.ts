import { v4 as uuidv4 } from "uuid";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";

interface ProfileInter {
    name: string;
    id: string;
    userId: string;
    imageUrl: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export async function POST(req: Request) {
    try {
        const { name, imageUrl } = await req.json();

        // Await the currentProfile function and extract the profile
        const currentProfileResult = await currentProfile();
        const profile = currentProfileResult?.profile;

        // Check if the profile is null
        if (!profile) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Ensure the profile matches the ProfileInter interface
        const profileData: ProfileInter = {
            name: profile.name,
            id: profile.id,
            userId: profile.userId,
            imageUrl: profile.imageUrl,
            email: profile.email,
            createdAt: profile.createdAt,
            updatedAt: profile.updatedAt,
        };

        // Create the server
        const server = await db.server.create({
            data: {
                profileId: profileData.id,
                name,
                imageUrl,
                inviteCode: uuidv4(),
                channels: {
                    create: [
                        { name: "general", profileId: profileData.id }
                    ]
                },
                members: {
                    create: [
                        { profileId: profileData.id, role: MemberRole.ADMIN }
                    ]
                }
            }
        });

        return NextResponse.json(server);

    } catch (error) {
        console.log("[SERVER_POST]", error)
        return new NextResponse("Internal error", {status:500})    }
}