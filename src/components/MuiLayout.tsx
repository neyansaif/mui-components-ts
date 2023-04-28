//Box is similar to div
//Stack is used to manage layout in one dimension either row or column
//Grid is used to manage layout in two dimensional and responsive layouts
//--The Grid component under the hood uses the flexbox module
//--The Grid consists of 12 columns
//--Each item in the grid can take up one or more columns as its width
//--There are five breakpoints each corresponding to a certain devices width

//--xs for mobile device size, sm for tablet device size,
//       md for desktop device size, lg and xl for large screen devices

//--We can assign integer values to each breakpoint which indicates
//    how many of the 12 available coulmns are occupied
//     by that item when the viewport satisfied that breakpoint
///        constraints
//If size id auto it will take the natural space according to the content
//Paper component is sarface related components like card
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

export const MuiLayout = () => {
   return (
      <Paper
         sx={{
            padding: "32px",
         }}
         elevation={4}
      >
         <Stack
            sx={{
               border: "1px solid black",
            }}
            spacing={2}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
         >
            <Box
               sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  height: "100px",
                  width: "100px",
                  padding: "16px",
                  "&:hover": {
                     backgroundColor: "primary.light",
                  },
               }}
            >
               Hello World
            </Box>
            <Box
               display="flex"
               height="100px"
               width="100px"
               bgcolor="success.light"
               p={2}
            >
               <h3>Hello Mterial Ui</h3>
            </Box>
         </Stack>
         <Grid container my={4} rowSpacing={2} columnSpacing={1}>
            <Grid item xs={12} sm={6} md={3}>
               <Box bgcolor="primary.light" p={4}>
                  Item 1
               </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
               <Box bgcolor="primary.light" p={4}>
                  Item 2
               </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
               <Box bgcolor="primary.light" p={4}>
                  Item 3
               </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
               <Box bgcolor="primary.light" p={4}>
                  Item 4
               </Box>
            </Grid>
         </Grid>
      </Paper>
   );
};
