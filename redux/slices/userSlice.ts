import { createSlice } from "@reduxjs/toolkit";
type AuthState = {
  isAuth: boolean;
  username: string;
  email: string;
  accessToken: string;
};
const initialState = {
  isAuth: false,
  username: "",
  email: "",
  accessToken: "",
} as AuthState; // 로그인하지 않은 초기상태

const userSlice = createSlice({
  name: "user", // slice name
  initialState, // 초깃값
  reducers: {
    logOut: () => {
      return initialState;
    }, // 로그아웃 시 초기상태로 변경
    logIn: (state, action) => {
      // 페이로드 객체에서 유저 정보 받아와 저장
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.isAuth = action.payload.accessToken ? true : false;
    },
    changeUsername: (state, action) => {
      state.username = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(PURGE, () => {
  //       return initialState;
  //     });
  //   },
});

export const { logOut, logIn, changeUsername } = userSlice.actions;
export default userSlice.reducer;
