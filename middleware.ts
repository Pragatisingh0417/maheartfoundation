import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getActiveLanguages, DEFAULT_LANGUAGE } from "./src/config/languages";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignore static assets, api routes, icons, files with extensions
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  const activeLangs = getActiveLanguages();
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  // If a URL explicitly starts with a language code (e.g. /es or /es/about), rewrite safely to base route
  const matchedLang = activeLangs.find(
    (l) => l.code.toLowerCase() === firstSegment?.toLowerCase()
  );

  if (matchedLang && matchedLang.code !== DEFAULT_LANGUAGE) {
    const newSegments = segments.slice(1);
    const newPath = "/" + newSegments.join("/");
    const url = request.nextUrl.clone();
    url.pathname = newPath || "/";

    const response = NextResponse.rewrite(url);
    response.headers.set("x-next-locale", matchedLang.code);
    response.cookies.set("NEXT_LOCALE", matchedLang.code, {
      path: "/",
      maxAge: 31536000,
    });
    return response;
  }

  // Check for ?lang= search query parameter
  const searchLang = request.nextUrl.searchParams.get("lang");
  if (searchLang) {
    const validLang = activeLangs.find(
      (l) => l.code.toLowerCase() === searchLang.toLowerCase()
    );
    if (validLang) {
      const response = NextResponse.next();
      response.cookies.set("NEXT_LOCALE", validLang.code, {
        path: "/",
        maxAge: 31536000,
      });
      response.headers.set("x-next-locale", validLang.code);
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
