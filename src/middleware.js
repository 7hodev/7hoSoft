import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.AUTH_SECRET;

const publicRoutes = [
  "/",
  "/login",
  "/register",
  "/api/auth/verify-email",
  "/reset-password",
];

export async function middleware(req) {
  const token = await getToken({ req, secret });
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!token;

  // Proteger /user y /admin
  if (!publicRoutes.includes(pathname) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
