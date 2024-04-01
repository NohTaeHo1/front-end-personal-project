"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MuiDemoColumns from "@/app/components/columns/mui-demo-columns";
import MuiDemoRows from "@/app/components/rows/mui-demo-rows";
import { NextPage } from "next";

const MuiPage:NextPage = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={MuiDemoRows()}
        columns={MuiDemoColumns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5, // 한페이지에 보여주는 행의 수
            },
          },
        }}
        pageSizeOptions={[3,5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export function Test() {}

export default MuiPage;
