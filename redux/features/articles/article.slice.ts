import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './article.init';
import { fetchAllArticles } from './article.service';

const articleThunks = [fetchAllArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handleFulfilled =  (state: any, {payload}: any) => {
    console.log('------------------ conclusion ---------------')
    state.array = payload
    console.log(state.array)
} // 저장


const handlePending = (state: any) => {
  
}

const handleRejected = (state: any) => {
  
}


export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending, rejected} = status;

        builder
        .addCase(fetchAllArticles.fulfilled, handleFulfilled)

    }
})
export const getAllArticles = (state: any) => { //얘가 읽어오는 게터
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.article.array.result))
    return state.article.array.result;//큰상태(state)의 
} // 꺼내주기

export const {} = articleSlice.actions

export default articleSlice.reducer;