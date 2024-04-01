'use client'
import { useSelector, useDispatch } from "react-redux";
import {handlePlus,handleMinus,getCount} from "@/redux/features/counter/counter.slice";
import { GroupAdd, GroupRemove } from "@mui/icons-material";
import { green, pink } from "@mui/material/colors";
import { NextPage } from "next";

const CounterPage:NextPage = ()  => {
  const count = useSelector(getCount);
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-500" style={{ marginTop: "100px" }}>
      <h1 className="text-3xl font-bold">Redux Counter : {count}</h1>
  
      <GroupAdd
        sx={{ fontSize: 100, color: pink[500] }}
        onClick={() => dispatch(handlePlus())}
      />
      <br />
      <GroupRemove
        sx={{ fontSize: 100, color: green[500] }}
        onClick={() => dispatch(handleMinus())}
      />
      <br />
    </div>
  );
}

export default CounterPage;
