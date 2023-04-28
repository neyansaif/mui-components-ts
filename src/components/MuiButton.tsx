import {
   Stack,
   Button,
   IconButton,
   ButtonGroup,
   ToggleButtonGroup,
   ToggleButton,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

export const MuiButton = () => {
   const [format, setFormat] = useState<string[]>([]);
   console.log({
      format,
   });
   const handleFormChange = (
      _event: React.MouseEvent<HTMLElement>,
      updatedForms: string[]
   ) => {
      setFormat(updatedForms);
   };

   return (
      <Stack spacing={4}>
         <Stack spacing={2} direction="row">
            <Button variant="text" href="https://google.com">
               Text
            </Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
         </Stack>
         <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary">
               Primary
            </Button>
            <Button variant="contained" color="secondary">
               Secondary
            </Button>
            <Button variant="text" color="error">
               error
            </Button>
            <Button variant="outlined" color="warning">
               warning
            </Button>
            <Button variant="contained" color="info">
               Info
            </Button>
            <Button variant="outlined" color="success">
               success
            </Button>
         </Stack>
         <Stack display="block" spacing={2} direction="row">
            <Button variant="contained" size="small">
               Small
            </Button>
            <Button variant="contained" size="medium">
               medium
            </Button>
            <Button variant="contained" size="large">
               large
            </Button>
         </Stack>
         <Stack display="block" spacing={2} direction="row">
            <Button
               variant="contained"
               startIcon={<SendIcon />}
               disableRipple
               onClick={() => alert("Clicked")}
            >
               Send
            </Button>
            <Button variant="contained" endIcon={<SendIcon />} disableElevation>
               Send
            </Button>
            <IconButton aria-label="send" color="success" size="small">
               <SendIcon />
            </IconButton>
         </Stack>
         <Stack direction="row">
            <ButtonGroup
               variant="contained"
               size="small"
               aria-label="alignment button group"
            >
               <Button>Left</Button>
               <Button>Center</Button>
               <Button>Right</Button>
            </ButtonGroup>
         </Stack>
         <Stack direction="row" spacing={2}>
            <ButtonGroup
               variant="outlined"
               orientation="vertical"
               aria-label="alignment button group"
            >
               <Button>Left</Button>
               <Button>Center</Button>
               <Button>Right</Button>
            </ButtonGroup>
         </Stack>
         <Stack direction="row">
            <ButtonGroup
               variant="text"
               color="success"
               aria-label="alignment button group"
            >
               <Button>Left</Button>
               <Button>Center</Button>
               <Button>Right</Button>
            </ButtonGroup>
         </Stack>
         <Stack direction="row">
            <ToggleButtonGroup
               aria-label="text formatting"
               value={format}
               onChange={handleFormChange}
               size="small"
               color="success"
               orientation="vertical"
               exclusive //selects only one option
            >
               <ToggleButton value="bold" aria-label="bold">
                  <FormatBoldIcon />
               </ToggleButton>
               <ToggleButton value="italic" aria-label="italic">
                  <FormatItalicIcon />
               </ToggleButton>
               <ToggleButton value="underlined" aria-label="underlined">
                  <FormatUnderlinedIcon />
               </ToggleButton>
            </ToggleButtonGroup>
         </Stack>
      </Stack>
   );
};
