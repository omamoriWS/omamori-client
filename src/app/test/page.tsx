"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUsername } from "@/redux/slices/userSlice";

const test = () => {
  const [newUsername, setUsername] = useState("");
  const { username } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();
  const onChange = (e: any) => {
    setUsername(e.target.value);
  };
  const onClickButton = () => {
    dispatch(changeUsername(newUsername));
  };
  return (
    <div>
      <div>이름:{username}</div>
      <input type="text" onChange={onChange} />
      <button onClick={onClickButton}>이름 변경</button>
    </div>
  );
};

export default test;
