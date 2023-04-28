import React from "react";
import {
   Box,
   List,
   ListItem,
   ListItemText,
   ListItemIcon,
   ListItemAvatar,
   Avatar,
   ListItemButton,
   Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
export const MuiList = () => {
   return (
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
         <List>
            <ListItem disablePadding>
               <ListItemButton>
                  <ListItemIcon>
                     <ListItemAvatar>
                        <Avatar>
                           <MailIcon />
                        </Avatar>
                     </ListItemAvatar>
                  </ListItemIcon>
                  <ListItemText primary="Item 1" secondary="secondary text" />
               </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
               <ListItemButton>
                  <ListItemAvatar>
                     <Avatar>
                        <MailIcon />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Item 2" secondary="secondary text" />
               </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
               <ListItemButton>
                  <ListItemAvatar>
                     <Avatar>
                        <MailIcon />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Item 3" secondary="secondary text" />
               </ListItemButton>
            </ListItem>
         </List>
      </Box>
   );
};
