"use client";

import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Stack, Slider } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { useState } from "react";

const ColorPage:NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  //handle1 = ()=>{}
  // <input type="색1" onChange={handle1}/>
  return (
    <>
    <header>
    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
  <VolumeDown />
  <Slider aria-label="Volume" value={value} onChange={handleChange} />
  <VolumeUp />
</Stack>

<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
  <VolumeDown />
  <Slider aria-label="Volume" value={value} onChange={handleChange} />
  <VolumeUp />
</Stack>

    </header>
      <div className="text-lg font-semibold">
        <main className="text-lg font-semibold2">
          <section
            className="text-lg font-semibold text-blue-500"
            style={{ width: "100px", height: "50px" }}
          >
            글씨색
          </section>
          <section
            className="text-lg font-semibold"
            style={{
              background: "text-blue-500",
              width: "100px",
              height: "50px",
            }}
          >
            화면색
          </section>
        </main>

        <footer>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleMenu}>
              Click me
            </button>
            {isOpen && (
              <div className="dropdown-content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
        </footer>
      </div>
    </>
  );
}

export default ColorPage;
// text-lg: 텍스트 크기를 크게 설정합니다.
// font-semibold: 폰트 두께를 semi-bold로 설정합니다.
// text-blue-500: 텍스트 색상을 Tailwind CSS가 정의한 'blue-500' 색상으로 설정합니다. Tailwind CSS는 색상 체계에서 숫자가 높을수록 색상이 더 진해집니다.
