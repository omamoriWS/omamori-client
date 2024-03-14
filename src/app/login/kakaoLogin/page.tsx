"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  //   const client_id = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  //   const redirect_uri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  //   const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}`;
  //   const AUTHORIZATION_CODE: string = new URL(
  //     document.location.toString()
  //   ).searchParams.get("code") as string;
  //   console.log(AUTHORIZATION_CODE);
  const [userInfo, setUserInfo] = useState();
  //상태관리 툴 결정되면 useState부분 바꿀 에정
  const router = useRouter();
  const [accessTokenFetching, setAccessTokenFetching] = useState(false);

  const getAccessToken = async () => {
    if (accessTokenFetching) return;

    try {
      setAccessTokenFetching(true);

      const response = await axios.get("http://18.117.242.221");
      const accessToken = response.data.accessToken;
      console.log("accessToken:", accessToken);

      setUserInfo({
        ...userInfo,
        accessToken: accessToken,
      });

      setAccessTokenFetching(false);
      getProfile();
    } catch (error) {
      console.error("Error:", error);
      setAccessTokenFetching(false);
    }
  };

  const getProfile = async () => {
    try {
      console.log("getProfile 호출");
      if (userInfo.accessToken) {
        const response = await axios.get("http://18.117.242.221", {
          headers: {
            Authorization: `${userInfo.accessToken}`,
          },
        });
        setUserInfo({
          ...userInfo,
          id: response.data.user.id,
          email: response.data.user.email,
          password: response.data.user.password,
          nickname: response.data.user.nickname,
          isLogin: true,
        });
        router.push("/");
      } else {
        console.log("No accessToken available");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (!userInfo.accessToken) {
      getAccessToken();
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfo.accessToken) {
      getProfile();
    }
  }, [userInfo]);

  return <div>Loading...</div>;
}
