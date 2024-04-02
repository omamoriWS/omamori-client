"use client";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function AuthContext({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>; // NextAuth 세션 데이터 및 상태에 액세스할 수 있도록 공유 세션 상태 구성
}
