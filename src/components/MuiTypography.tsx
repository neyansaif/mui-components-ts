import { Typography } from "@mui/material";

export const MuiTypography = () => {
   return (
      <div>
         <Typography variant="h1">h1 heading</Typography>
         <Typography variant="h2">h2 heading</Typography>
         <Typography variant="h3">h3 heading</Typography>
         <Typography variant="h4" component="h1" gutterBottom>
            h4 heading
         </Typography>
         <Typography variant="h5">h5 heading</Typography>
         <Typography variant="h6">h6 heading</Typography>

         <Typography variant="subtitle1">Sub Title-1</Typography>
         <Typography variant="subtitle2">Sub Title-2</Typography>
         <Typography variant="body1">
            This is a paragraph of text on my website.
         </Typography>
         <Typography variant="body2">
            This is a paragraph of text on my website.1
         </Typography>
         <Typography variant="caption">Caption Text</Typography>
         <Typography variant="overline">Overline Text</Typography>
         <Typography variant="button">Button Text</Typography>
      </div>
   );
};
