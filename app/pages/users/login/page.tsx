"use client";
import { API } from "@/redux/common/enums/API";
import { PG } from "@/redux/common/enums/PG";
import AxiosConfig from "@/redux/common/configs/axios-config";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NextPage } from "next";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
const SERVER = "http://localhost:8081";

const LoginPage:NextPage = () => {
  const router = useRouter();

  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const handleuserName = (e: any) => {
    setuserName(e.target.value);
  };
  const handlepassword = (e: any) => {
    setpassword(e.target.value);
  };

  const handleSubmit = () => {
    alert(userName + "님 로그인 성공");

    const url = `${API.SERVER}/login`;
    const data = { userName, password }; //key와 value가 같으면 생략 가능 원래는 userName:userName 식으로 적어야함. 하이픈 -  걸리면 생략부락

    axios.post(url, data, AxiosConfig()).then((res) => {
      const message = res.data.message;
      alert(message);

      if (message === "FAIL") {
        alert("FAIL");
      } else if (message === "SUCCESS") {
        router.push(`${PG.BOARD}/articles`);
        // 외부에서의 입력값을 바깥쪽에 쓰는 습관 들이자
      } else if (message === "WRONG_PASSWORD") {
        alert("WRONG_PASSWORD");
      } else {
        alert("지정되지 않은 값");
      }
    }); // res - 입력값
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="아이디"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleuserName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlepassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            전송
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
//아이디, 비번, 전송버튼
export default LoginPage;