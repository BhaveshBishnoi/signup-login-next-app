import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/signup" || path === "/";
  const isProtectedPath = path === "/dashboard";

  const token = request.cookies.get("token")?.value || "";

  // Redirect authenticated users from public pages to dashboard
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  // Redirect unauthenticated users to login
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/dashboard",
    "/dashboard/:path*",
  ],
}; 