import {
   Box,
   FormControlLabel,
   Switch,
   FormControl,
   FormLabel,
   FormHelperText,
   FormGroup,
} from "@mui/material";
import { useState } from "react";
export const MuiSwitch = () => {
   const [checked, setChecked] = useState(false);
   const [skills, setSkills] = useState<string[]>([]);
   const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSkills(
         event.target.checked
            ? [...skills, event.target.value]
            : skills.filter((skill) => skill !== event.target.value)
      );
   };
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
      console.log(event.target.checked);
   };

   return (
      <Box>
         <Box>
            <FormControlLabel
               label="Dark mode"
               control={
                  <Switch
                     checked={checked}
                     onChange={handleChange}
                     size="small"
                     color="success"
                  />
               }
            />
         </Box>
         <hr />
         <Box>
            <FormControl>
               <FormLabel>Skills</FormLabel>
               <FormGroup>
                  <FormControlLabel
                     label="HTML"
                     control={
                        <Switch
                           value="html"
                           checked={skills.includes("html")}
                           onChange={handleSkillChange}
                        />
                     }
                  />
                  <FormControlLabel
                     label="CSS"
                     control={
                        <Switch
                           value="css"
                           checked={skills.includes("css")}
                           onChange={handleSkillChange}
                        />
                     }
                  />
                  <FormControlLabel
                     label="JavaScript"
                     control={
                        <Switch
                           value="JavaScript"
                           checked={skills.includes("JavaScript")}
                           onChange={handleSkillChange}
                        />
                     }
                  />
               </FormGroup>
               <FormHelperText>
                  {skills.length === 0 ? "Required" : ""}
               </FormHelperText>
            </FormControl>
         </Box>
      </Box>
   );
};
