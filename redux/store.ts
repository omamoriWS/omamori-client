import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window === "undefined"
    ? createNoopStorage()
    : createWebStorage("local");

// Redux persist storage는 클라이언트 사이드에서만 작동하기 때문에 sync 스토리지 생성에 실패.
// Nodejs 환경(서버사이드)에서 redux-persist 사용 시 위와 같은 코드를 삽입해야 함

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
}; //redux-persist를 위한 초기 구성

const rootReducer = combineReducers({ user: userReducer }); // 생성한 reducer들을 rootReducer로 병합

const persistedReducer = persistReducer(persistConfig, rootReducer); // rootReducer를 persist

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        //직렬화할 수 없는 값이 상태 또는 디스패치된 액션에 포함되었는지 감지하는 사용자 정의 미들웨어
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // redux-persist 는 PERSIST -> REHYDRATE 순으로 액션이 일어나면서 REHYDRATE에서 storage에 저장된 값을 가져와 state를 설정해줌. REHYDRATE, PERSIST 등의 액션에 대해 직렬화할 수 있는지 체크하는 것을 무시해야 redux-persist가 제대로 작동함
      },
    }),
});

export const persistor = persistStore(store);
