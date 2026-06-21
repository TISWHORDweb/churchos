import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const publicRoutes = [
  "/",
  "/features",
  "/pricing",
  "/stories",
  "/login",
  "/register",
  "/verify-email",
  "/attend",
  "/api/auth",
];

const authRoutes = ["/login", "/register"];

const dashboardRoutes = ["/dashboard"];
const adminRoutes = ["/admin"];
const onboardingRoutes = ["/onboarding"];

function isPublicRoute(pathname: string) {
  return publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}

function isAuthRoute(pathname: string) {
  return authRoutes.some((route) => pathname.startsWith(route));
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = getSessionCookie(request);

  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  if (isPublicRoute(pathname) && !isAuthRoute(pathname)) {
    return NextResponse.next();
  }

  const isLoggedIn = !!sessionCookie;

  if (isAuthRoute(pathname) && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    !isLoggedIn &&
    (dashboardRoutes.some((r) => pathname.startsWith(r)) ||
      adminRoutes.some((r) => pathname.startsWith(r)) ||
      onboardingRoutes.some((r) => pathname.startsWith(r)))
  ) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
