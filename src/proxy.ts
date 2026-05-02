// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);

// const isOrgSelectionRoute = createRouteMatcher(["/org-selection(.*)"]);

// export default clerkMiddleware(async (auth, req) => {
//   const { userId, orgId } = await auth();

//   if (isPublicRoute(req)) {
//     return NextResponse.next();
//   }

//   if (!userId) {
//     await auth.protect();
//   }

//   if (isOrgSelectionRoute(req)) {
//     return NextResponse.next();
//   }

//   if (userId && !orgId) {
//     const orgSelection = new URL("/org-selection", req.url);
//     return NextResponse.redirect(orgSelection);
//   }
//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);
const isOrgSelectionRoute = createRouteMatcher(["/org-selection(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, orgId } = await auth();

  // Allow public routes always
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // Allow org-selection always (no redirect loop)
  if (isOrgSelectionRoute(req)) {
    return NextResponse.next();
  }

  // If not signed in, protect (redirect to sign-in)
  if (!userId) {
    await auth.protect();
  }

  // Signed in but no org → pick one
  if (userId && !orgId) {
    return NextResponse.redirect(new URL("/org-selection", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
