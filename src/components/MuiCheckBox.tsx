import {
   Box,
   FormControlLabel,
   Checkbox,
   FormControl,
   FormLabel,
   FormGroup,
   FormHelperText,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { useState } from "react";
export const MuiCheckBox = () => {
   const [checked, setChecked] = useState(false);
   const [skills, setSkills] = useState<string[]>([]);
   console.log({ skills });
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
   };

   const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const index = skills.indexOf(event.target.value);
      if (index === -1) {
         setSkills([...skills, event.target.value]);
      } else {
         setSkills(skills.filter((skill) => skill !== event.target.value));
      }
   };
   return (
      <Box>
         <Box>
            <FormControlLabel
               label="I accept terms and conditions"
               control={
                  <Checkbox
                     size="small"
                     color="secondary"
                     checked={checked}
                     onChange={handleChange}
                  />
               }
            ></FormControlLabel>
         </Box>
         <h3>{checked ? "Button is checked" : ""}</h3>
         <Box>
            <Checkbox
               icon={<BookmarkBorderIcon />}
               checkedIcon={<BookmarkIcon />}
               checked={checked}
               onChange={handleChange}
            />
         </Box>
         <Box>
            <FormControl>
               <FormLabel>Skills</FormLabel>
               <FormGroup row>
                  <FormControlLabel
                     label="HTML"
                     control={
                        <Checkbox
                           value="html"
                           checked={skills.includes("html")}
                           onChange={handleSkillChange}
                        />
                     }
                  />
                  <FormControlLabel
                     label="CSS"
                     control={
                        <Checkbox
                           value="css"
                           checked={skills.includes("css")}
                           onChange={handleSkillChange}
                        />
                     }
                  />
                  <FormControlLabel
                     label="JavaScript"
                     control={
                        <Checkbox
                           value="JavaScript"
                           checked={skills.includes("JavaScript")}
                           onChange={handleSkillChange}
                        />
                     }
                  />
               </FormGroup>
               <FormHelperText>{skills.length === 0 ? "Required" : ""}</FormHelperText>
            </FormControl>
         </Box>
      </Box>
   );
};

// import { Box, FormControlLabel, Checkbox } from "@mui/material";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";

// import { useState } from "react";
// export const MuiCheckBox = () => {
//    const [checked, setChecked] = useState(false);
//    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setChecked(event.target.checked);
//    };
//    return (
//       <Box>
//          <Box>
//             <FormControlLabel
//                label="I accept terms and conditions"
//                control={<Checkbox checked={checked} onChange={handleChange} />}
//             ></FormControlLabel>
//          </Box>
//          <h3>{checked ? "Button is checked" : ""}</h3>
//          <Box>
//             <Checkbox
//                icon={<BookmarkBorderIcon />}
//                checkedIcon={<BookmarkIcon />}
//                checked={checked}
//                onChange={handleChange}
//             />
//          </Box>
//       </Box>
//    );
// };
