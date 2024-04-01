import CompanyRow from "@/app/components/rows/company-rows";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { NextPage } from "next";

const Company = (props: ICompany) => {
  return (
    <tr key={props.id}>
      <td>{props.company}</td>
      <td>{props.contact}</td>
      <td>{props.country}</td>
    </tr>
  );
};

const columns: GridColDef[] = [
  { field: "company", headerName: "Company", width: 200 },
  { field: "contact", headerName: "Contact", width: 200 },
  { field: "country", headerName: "Country", width: 200 },
];

const CompaniesPage:NextPage = () => {
  return (
    <>
      <h2>HTML Table</h2>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={CompanyRow()}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5, // 한페이지에 보여주는 행의 수
              },
            },
          }}
          pageSizeOptions={[1]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}

export default CompaniesPage;
