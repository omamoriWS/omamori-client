import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import { redirect } from "next/dist/server/api-utils";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // 초기 로그인시 User 정보를 가공해 반환
      if (account && user) {
        // 카카오 로그인에 성공해 account와 user 정보를 받아왔을 때
        return {
          accessToken: "bearer Token",
          // 서버에 api 요청하도록 수정할 것 (유저 정보, 액세스/리프레쉬 토큰, redirect URL 넘겨받기)
          user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as User;
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
