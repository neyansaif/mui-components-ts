import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
   const [value, setValue] = useState("");
   return (
      <Stack spacing={4}>
         <Stack direction="row" spacing={2}>
            <TextField label="Name" variant="outlined" />
            <TextField label="Name" variant="filled" />
            <TextField id="filled-basic" label="Name" variant="standard" />
         </Stack>

         <Stack direction="row" spacing={2}>
            <TextField
               label="Small Secondary"
               variant="outlined"
               size="small"
               color="secondary"
            />
         </Stack>

         <Stack direction="row" spacing={2}>
            <TextField
               label="Form Input"
               required
               value={value}
               onChange={(e) => setValue(e.target.value)}
               //    error={value.length === 0}
               error={!value}
               helperText={
                  value.length === 0
                     ? "Required"
                     : "Do not Share Your Password with anyone"
               }
            />
            <TextField
               label="Password"
               type="password"
               helperText="Do not Share Your Password with anyone"
               disabled
            />
            <TextField label="Read Only" InputProps={{ readOnly: true }} />
         </Stack>
         <Stack direction="row" spacing={2}>
            <TextField
               label="Amount"
               InputProps={{
                  startAdornment: (
                     <InputAdornment position="start">$</InputAdornment>
                  ),
               }}
            />
            <TextField
               label="Weight"
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="end">kg</InputAdornment>
                  ),
               }}
            />
         </Stack>
      </Stack>
   );
};
