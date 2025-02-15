import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModel } from "@/components/models/initial-model";

interface Profile {
  id: string;       // @id @default(uuid())
  userId: string;   // @unique
  name: string;
  imageUrl: string; // @db.Text
  email: string;    // @db.Text
  createdAt: Date;  // @default(now())
  updatedAt: Date;  // @updatedAt
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetupPage = async () => {
  const profile = (await initialProfile()) as Profile;

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <InitialModel />;
};

export default SetupPage;
