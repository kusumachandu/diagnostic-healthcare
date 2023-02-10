import React, { useState } from "react"
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

function AppointmentsLayout() {

  const [toggle, setToggle] = useState<any>({});

  const handleToggle = (index: any) => {
    setToggle({
      ...toggle,
      [index]: !toggle[index],
    });
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      editable: true,
    },
    {
      field: "time",
      headerName: 'Time',
      width: 150,
      editable: false
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: false,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      type: "string",
      width: 120,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
      renderCell: (cellValues: any) => {

        if (!toggle) {
          return (
            <Button
              variant="contained"
              color="success"
              onClick={handleToggle}
            >
              Success
            </Button>
          )
        }
        else {
          return (
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setToggle(!toggle)
              }}
            >
              Pending
            </Button>
          )
        }
      }
    },
  ];

  const rows = [
    {
      id: 1,
      date: "10-02-23",
      time: "11AM-12PM",
      name: "Snow",
      email: "chandu@gmail.com",
      mobile: "8790122447",
      status: [
        "pending",
        "Completed"
      ]
    },
    {
      id: 2,
      date: "11-02-23",
      time: "11AM-12PM",
      name: "Lannister",
      email: "chandu@gmail.com",
      mobile: "8790122447",
      status: [
        "pending",
        "Completed"
      ]
    },
    {
      id: 3,
      date: "12-02-23",
      time: "11AM-12PM",
      name: "Lannister",
      email: "chandu@gmail.com",
      mobile: "8790122447",
      status: [
        "pending",
        "Completed"
      ]
    },
    {
      id: 4,
      date: "13-02-23",
      time: "11AM-12PM",
      name: "Stark",
      email: "chandu@gmail.com",
      mobile: "8790122447",
      status: [
        "pending",
        "Completed"
      ]
    },
    {
      id: 5,
      date: "14-02-23",
      time: "11AM-12PM",
      name: "Targaryen",
      email: "chandu@gmail.com",
      mobile: "8790122447",
      status: [
        "pending",
        "Completed"
      ]

    },
    {
      id: 6,
      date: "15-02-23",
      time: "11AM-12PM",
      name: "Melisandre",
      email: "chandu@gmail.com",
      mobile: "8790122447",
      status: [
        "pending",
        "Completed"
      ]

    },
    {
      id: 7,
      date: "16-02-23",
      time: "11AM-12PM",
      name: "Clifford",
      email: "chandu@gmail.com",
      mobile: "8790122447",
      status: [
        "pending",
        "Completed"
      ]
    },
    {
      id: 8,
      date: "17-02-23",
      time: "11AM-12PM",
      name: "Frances",
      email: "chandu@gmail.com",
      mobile: "8790122447",
      status: [
        "pending",
        "Completed"
      ]
    },
    {
      id: 9,
      date: "18-02-23",
      time: "11AM-12PM",
      name: "Roxie",
      email: "chandu@gmail.com",
      mobile: "8790122447",
      status: [
        "pending",
        "Completed"
      ]
    },
    {
      id: 10,
      date: "18-02-23",
      time: "11AM-12PM",
      name: "Roxie",
      email: "chandu@gmail.com",
      mobile: "8790122447",
      status: [
        "pending",
        "Completed"
      ]
    },
  ];

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
          textAlign: "center"
        }}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  )
}

export default AppointmentsLayout