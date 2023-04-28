import { Stack, Link, Typography } from "@mui/material";

export const MuiLinks = () => {
   return (
      <Stack spacing={2} direction="row" m={4}>
         <Link href="#">Link</Link>
         <Link href="#" color="secondary" underline="hover">
            Secondary
         </Link>
         <Typography variant="h6">
            <Link href="#" color="secondary" underline="none">
               Secondary
            </Link>
         </Typography>
      </Stack>
   );
};
