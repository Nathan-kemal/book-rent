// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";

export const config = {
  // matcher: ["/:id*"],
  matcher: ["/((?!auth/sign-up).*)"],
};

export default withAuth({
  pages: {
    signIn: "/auth/sign-in",
  },
});
