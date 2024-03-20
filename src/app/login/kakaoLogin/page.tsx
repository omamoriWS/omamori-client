"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [accessTokenFetching, setAccessTokenFetching] = useState(false);

  const getAccessToken = async () => {
    if (accessTokenFetching) return;

    try {
      setAccessTokenFetching(true);

      const response = await axios.post("http://18.117.242.221");

      setAccessTokenFetching(false);
      getProfile();
    } catch (error) {
      console.error("Error:", error);
      setAccessTokenFetching(false);
    }
  };

  const getProfile = async () => {
    try {
      if (true) {
        //accessToken여부 확인
        const response = await axios.get("http://18.117.242.221", {
          headers: {
            Authorization: `Bearer accessToken`, //accessToken 넣어야함
          },
        });

        if (response.data.status === 200) {
          router.push("/");
        }
      } else {
        console.log("No accessToken available");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (true) {
      //accessToken 여부 확인
      getAccessToken();
    }
  }, []);

  useEffect(() => {
    if (true) {
      //accessToken 여부 확인
      getProfile();
    }
  }, []);

  return <div>Loading...</div>;
}
