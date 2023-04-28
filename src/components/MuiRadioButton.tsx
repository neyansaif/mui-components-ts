import {
   Box,
   FormControl,
   FormLabel,
   FormControlLabel,
   RadioGroup,
   Radio,
   FormHelperText,
} from "@mui/material";
import { useState } from "react";

export const MuiRadioButton = () => {
   const [value, setValue] = useState("");

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
   };

   return (
      <Box>
         <FormControl>
            <FormLabel id="job-experience-group-label">
               Years of experience
            </FormLabel>
            <RadioGroup
               name="job experience group"
               aria-labelledby="job-experience-group-label"
               value={value}
               onChange={handleChange}
               row
            >
               <FormControlLabel
                  value="0-2"
                  control={<Radio size="small" color="secondary" />}
                  label="0-2"
               />
               <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
               <FormControlLabel
                  value="6-10"
                  control={<Radio />}
                  label="6-10"
               />
            </RadioGroup>
            <FormHelperText>{value}</FormHelperText>
         </FormControl>
         <p>Selected experience: {value}</p>
      </Box>
   );
};

// import {
//     Box,
//     FormControl,
//     FormLabel,
//     FormControlLabel,
//     RadioGroup,
//     Radio,
//  } from "@mui/material";
//  import { useState } from "react";

//  export const MuiRadioButton = () => {
//     const [value, setValue] = useState("");

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//        setValue(event.target.value);
//     };

//     return (
//        <Box>
//           <FormControl>
//              <FormLabel id="job-experience-group-label">
//                 Years of experience
//              </FormLabel>
//              <RadioGroup
//                 name="job experience group"
//                 aria-labelledby="job-experience-group-label"
//                 value={value}
//                 onChange={handleChange}
//              >
//                 <FormControlLabel value="0-2" control={<Radio />} label="0-2" />
//                 <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
//                 <FormControlLabel
//                    value="6-10"
//                    control={<Radio />}
//                    label="6-10"
//                 />
//              </RadioGroup>
//           </FormControl>
//           <p>Selected experience: {value}</p>
//        </Box>
//     );
//  };
