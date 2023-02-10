import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import Button from "@mui/material/Button";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase-config";

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
  // const [toggle, setToggle] = useState<any>({});
  const [appointments, setAppointments] = useState<any>([])
  const appointmentsCollectionRef = collection(db, 'appointments')

  // const handleToggle = (index: any) => {
  //   setToggle({
  //     ...toggle,
  //     [index]: !toggle[index],
  //   });
  // };


  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getDocs(appointmentsCollectionRef)
        setAppointments(data.docs.map((doc) => ({ ...doc.data() })))
      } catch (error) {
        console.log(error);
      }
      
    }
    fetchAppointments()
  },[])

  return (
      <Box
        sx={{
          height: 650,
          width: "70%",
          margin: "auto",
        }}
      >
        <DataGrid
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
        />
      </Box>
  );
}

export default AppointmentsLayout;
