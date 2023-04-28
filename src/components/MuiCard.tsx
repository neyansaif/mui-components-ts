import {
   Box,
   Card,
   CardContent,
   Typography,
   CardActions,
   Button,
   CardMedia,
} from "@mui/material";

export const MuiCard = () => {
   return (
      <Box width="300px">
         <Card>
            <CardMedia
               component="img"
               height="140"
               image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
               alt="green iguana"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  React
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  React is a JavaScript library for building user interfaces. It
                  is maintained by Facebook and a community of individual
                  developers and companies.
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small">Share</Button>
               <Button size="small">Learn More</Button>
            </CardActions>
         </Card>
      </Box>
   );
};
