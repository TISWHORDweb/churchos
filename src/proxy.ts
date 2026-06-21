import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const authRoutes = ["/login", "/register"];

const protectedPrefixes = ["/dashboard", "/admin", "/onboarding"];

function isAuthRoute(pathname: string) {
  return authRoutes.some((route) => pathname.startsWith(route));
}

function isProtectedRoute(pathname: string) {
  return protectedPrefixes.some((prefix) => pathname.startsWith(prefix));
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only auth-related routes reach this proxy (see matcher below).
  // Marketing pages (/features, /pricing, etc.) skip proxy entirely.

  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  let sessionCookie: string | null = null;
  try {
    sessionCookie = getSessionCookie(request) ?? null;
  } catch {
    // Don't block navigation if cookie parsing fails on the edge
    return NextResponse.next();
  }

  const isLoggedIn = !!sessionCookie;

  if (isAuthRoute(pathname) && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!isLoggedIn && isProtectedRoute(pathname)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Only run proxy on routes that need auth — keeps marketing pages
// off the edge layer so hard reloads on /features, /pricing, etc. work on Vercel.
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/onboarding/:path*",
    "/login",
    "/register",
    "/api/auth/:path*",
  ],
};
