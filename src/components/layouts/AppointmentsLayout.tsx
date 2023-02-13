import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import Button from "@mui/material/Button";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import useFetchAppointments from "@/hooks/fetchAppointments";
import { useAuth } from "@/context/AuthContext";
import Loading from "./Loading";

const columns = [
  { 
    field: "slno",
    headerName: '',
    width: 30
  },
  {
    field: "bookingDate",
    headerName: "Appointment On",
    width: 150,
    editable: true,
  },
  {
    field: "bookingTime",
    headerName: "Appointment At",
    width: 150,
    editable: false,
  },
  {
    field: "name",
    headerName: "Full Name",
    width: 180,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
    editable: false,
  },
  {
    field: "mobile",
    headerName: "Mobile",
    type: "string",
    width: 150,
    editable: false,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 150,
  //   editable: true,
  //   renderCell: (cellValues: any) => {
  //     if (!toggle) {
  //       return (
  //         <Button variant="contained" color="success" onClick={handleToggle}>
  //           Success
  //         </Button>
  //       );
  //     } else {
  //       return (
  //         <Button
  //           variant="contained"
  //           color="error"
  //           onClick={() => {
  //             setToggle(!toggle);
  //           }}
  //         >
  //           Pending
  //         </Button>
  //       );
  //     }
  //   },
  // },
];

function AppointmentsLayout() {
  const { userInfo }:any = useAuth();
  const { appointments, loading, error } = useFetchAppointments();

  if (loading) {
    return <Loading />
  }


  return (
      <Box
        sx={{
          height: 650,
          width: "90%",
          margin: "auto",
        }}
      >
        {loading && <h1>Loading...</h1>}
        {userInfo && !loading && <DataGrid
          sx={{
            textAlign: "center",
          }}
          rows={appointments}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          // checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />}
      </Box>
  );
}

export default AppointmentsLayout;
