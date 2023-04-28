import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

type Skill = {
   id: number;
   label: string;
};

const skills = [
   "JavaScript",
   "TypeScript",
   "React",
   "Redux",
   "Node.js",
   "Express",
   "MongoDB",
   "HTML",
   "CSS",
];

const skillsOptions = skills.map((skill, index) => ({
   id: index + 1,
   label: skill,
}));

export const MuiAutoComplete = () => {
   const [value, setValue] = useState<string | null>(null);
   const [skill, setSkill] = useState<Skill | null>(null);
   console.log({ skill });
   return (
      <Stack spacing={2} width={"250px"}>
         <Autocomplete
            options={skills}
            renderInput={(params) => <TextField {...params} label="skills" />}
            value={value}
            onChange={(event: any, newValue: string | null) => {
               setValue(newValue);
            }}
            freeSolo //for adding a new skill by user
         />
         <Autocomplete
            options={skillsOptions}
            renderInput={(params) => <TextField {...params} label="skills" />}
            value={skill}
            onChange={(event: any, newValue: Skill | null) => {
               setSkill(newValue);
            }}
         />
      </Stack>
   );
};
