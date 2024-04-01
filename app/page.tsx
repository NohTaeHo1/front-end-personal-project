"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";
import { PG } from "../redux/common/enums/PG";
import AxiosConfig from "@/redux/common/configs/axios-config";

const SERVER = "http://localhost:8081";
export default function Home() {
  const [name, setName] = useState("");
  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    alert("리퀘스트가 가져가는 이름" + name);
    const url = `${SERVER}/name`;
    const data = { name: name };

    axios.post(url, data, AxiosConfig()).then((res) => {
      alert("리스핀스가 가져온 이름 : " + JSON.stringify(res.data));
    });
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold text-center">Welcome</h1>
        <h3 className="text-lg font-semibold">당신의 이름은</h3>

        <input
          type="text"
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          onChange={handleChange}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleClick}
        >
          전송
        </button>

        <div className="space-x-4">
          <Link
            href={`${PG.USER}/login`}
            className="text-blue-500 hover:underline"
          >
            로그인
          </Link>
          <Link
            href={`${PG.USER}/join`}
            className="text-blue-500 hover:underline"
          >
            회원가입
          </Link>
          <Link
            href={`${PG.DEMO}/mui_demo`}
            className="text-blue-500 hover:underline"
          >
            MUI 데모
          </Link>
          <Link
            href={`${PG.DEMO}/counter`}
            className="text-blue-500 hover:underline"
          >
            카운터데모
          </Link>
          <Link
            href={`${PG.DEMO}/mui_demo/color`}
            className="text-blue-500 hover:underline"
          >
            색테스트
          </Link>
          <Link
            href={`${PG.DEMO}/counter`}
            className="text-blue-500 hover:underline"
          >
            카운터
          </Link>
          <Link
            href={`${PG.DEMO}/redux-counter`}
            className="text-blue-500 hover:underline"
          >
            리덕스 카운터 데모
          </Link>
          <Link
            href={`${PG.BOARD}/articles`}
            className="text-blue-500 hover:underline"
          >
            전체 게시글
          </Link>

          <Link
            href={`${PG.USER}/users/`}
            className="text-blue-500 hover:underline"
          >
            users
          </Link>
        </div>
      </div>
    </>
  );
}
