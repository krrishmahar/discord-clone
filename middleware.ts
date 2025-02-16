import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/profile(.*)",
  "/services(.*)"
])

export default clerkMiddleware(async(auth, req:NextRequest) => {
  const { userId, redirectToSignIn } = await auth()

  if (!userId && isProtectedRoute(req)){
    //else do: await auth.protect() to send all unauthorized req directly to /signin 
    return redirectToSignIn();
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
