import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllArticlesAPI } from "./article.api";

export const fetchAllArticles: any = createAsyncThunk(
    'articles/fetchAllArticles',
    async (page: number)=>{
        console.log('fetchAllArticles page : '+ page)
        const data:any = await fetchAllArticlesAPI(1); // 이름은 자유. axios임. 서버와의 통신 기능

        const {message, result}:any = data
        return data
    }
)