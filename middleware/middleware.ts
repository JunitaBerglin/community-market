// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const userId = req.cookies.get("userId")?.value;

//   if (!userId && !req.nextUrl.pathname.startsWith("/login")) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   if (userId) {
//     const url = req.nextUrl.clone();
//     url.searchParams.set("userId", userId);
//     return NextResponse.rewrite(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/products/:path*", "/dashboard/:path*"],
// };
