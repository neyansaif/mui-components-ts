import React from "react";
import {
   TableContainer,
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   Paper,
} from "@mui/material";

export const MuiTable = () => {
   return (
      <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
         <Table aria-label="simple table" stickyHeader>
            <TableHead>
               <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Ip Address</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {tabledata.map((row) => (
                  <TableRow
                     key={row.id}
                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                     <TableCell>{row.id}</TableCell>
                     <TableCell>{row.first_name}</TableCell>
                     <TableCell>{row.last_name}</TableCell>
                     <TableCell align="center">{row.email}</TableCell>
                     <TableCell>{row.gender}</TableCell>
                     <TableCell>{row.ip_address}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
};

const tabledata = [
   {
      id: 1,
      first_name: "Delcine",
      last_name: "Walwood",
      email: "dwalwood0@kickstarter.com",
      gender: "Female",
      ip_address: "224.109.23.102",
   },
   {
      id: 2,
      first_name: "Rafaellle",
      last_name: "Stranks",
      email: "rstranks1@ovh.net",
      gender: "Male",
      ip_address: "138.21.96.28",
   },
   {
      id: 3,
      first_name: "Roxanna",
      last_name: "Berford",
      email: "rberford2@nba.com",
      gender: "Female",
      ip_address: "49.123.176.215",
   },
   {
      id: 4,
      first_name: "Arlette",
      last_name: "Olifard",
      email: "aolifard3@biblegateway.com",
      gender: "Female",
      ip_address: "252.149.86.139",
   },
   {
      id: 5,
      first_name: "Milty",
      last_name: "Bradfield",
      email: "mbradfield4@youtu.be",
      gender: "Male",
      ip_address: "31.85.12.94",
   },
   {
      id: 6,
      first_name: "Rolph",
      last_name: "Maber",
      email: "rmaber5@wsj.com",
      gender: "Male",
      ip_address: "137.203.134.86",
   },
   {
      id: 7,
      first_name: "Thane",
      last_name: "Klaesson",
      email: "tklaesson6@usda.gov",
      gender: "Male",
      ip_address: "32.132.168.27",
   },
   {
      id: 8,
      first_name: "Ricki",
      last_name: "Strotone",
      email: "rstrotone7@oracle.com",
      gender: "Female",
      ip_address: "24.194.37.204",
   },
   {
      id: 9,
      first_name: "Mano",
      last_name: "Crookston",
      email: "mcrookston8@nifty.com",
      gender: "Male",
      ip_address: "48.149.254.58",
   },
   {
      id: 10,
      first_name: "Ilyse",
      last_name: "Worsnip",
      email: "iworsnip9@deliciousdays.com",
      gender: "Female",
      ip_address: "121.211.106.171",
   },
];
