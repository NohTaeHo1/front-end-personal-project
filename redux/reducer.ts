import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import countReducer from "@/redux/features/counter/counter.slice";
import articleReducer from "@/redux/features/articles/article.slice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import userReducer from "@/redux/features/users/user.slice";


const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const countPersistConfig = {
  key: "count",
  storage,
  whitelist: ["countState"],
};
const articlePersistConfig = {
  key: "article",
  storage,
  whitelist: ["articleState"],
};
const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userState"],
};


const persistedCountReducer = persistReducer(countPersistConfig, countReducer);
const persistedArticleReducer = persistReducer(articlePersistConfig, articleReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);


export const rootReducer = combineReducers({
  count: persistedCountReducer, // 키로 호출, 선형이 아닌 다이렉트로 찾음
  article: persistedArticleReducer,
  user: persistedUserReducer
});