"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUsername } from "@/redux/slices/userSlice";
import { signIn, useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

const test = () => {
  const { data: session } = useSession();
  const sessionData = useSession();
  const [newUsername, setUsername] = useState("");
  const { username } = useSelector((state: any) => state.user);
  // redux store에서 name:user인 slice의 username 항목을 받아오는 코드
  const dispatch = useDispatch();
  const onChange = (e: any) => {
    setUsername(e.target.value);
  };
  const onClickButton = () => {
    dispatch(changeUsername(newUsername));
  };
  useEffect(() => {
    console.log(sessionData);
  }, [session]);

  if (session) {
    return (
      <>
        {/* 세션 데이터 받아올 때 */}
        {session.user?.name}님 반갑습니다
        <br />
        <button
          onClick={() => {
            signOut();
          }}>
          로그아웃
        </button>
        <div>
          <div>{username}</div>
          <input type="text" onChange={onChange} />
          <button onClick={onClickButton}>이름 변경</button>
        </div>
      </>
    );
  }
  return (
    <button
      onClick={() => {
        signIn("kakao");
      }}>
      로그인
    </button>
  );
};

export default test;
