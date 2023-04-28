//Accordion component allows the user to show and hide
//     sections of related contents on a page

import { useState } from "react";
import {
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const MuiAccordion = () => {
   const [expanded, setExpanded] = useState<string | false>(false);
   return (
      <div>
         <Accordion
            expanded={expanded === "panel1"}
            onChange={() =>
               setExpanded(expanded === "panel1" ? false : "panel1")
            }
         >
            <AccordionSummary
               id="panel1-header"
               aria-controls="panel1-content"
               expandIcon={<ExpandMoreIcon />}
            >
               <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  incidunt hic similique. Ab ullam numquam odit aliquam
                  recusandae doloremque ipsum labore amet laborum sequi, in
                  reprehenderit fuga debitis! Neque, cum.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === "panel2"}
            onChange={() =>
               setExpanded(expanded === "panel2" ? false : "panel2")
            }
         >
            <AccordionSummary
               id="panel2-header"
               aria-controls="panel2-content"
               expandIcon={<ExpandMoreIcon />}
            >
               <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  incidunt hic similique. Ab ullam numquam odit aliquam
                  recusandae doloremque ipsum labore amet laborum sequi, in
                  reprehenderit fuga debitis! Neque, cum.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === "panel3"}
            onChange={() =>
               setExpanded(expanded === "panel3" ? false : "panel3")
            }
         >
            <AccordionSummary
               id="panel3-header"
               aria-controls="panel3-content"
               expandIcon={<ExpandMoreIcon />}
            >
               <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  incidunt hic similique. Ab ullam numquam odit aliquam
                  recusandae doloremque ipsum labore amet laborum sequi, in
                  reprehenderit fuga debitis! Neque, cum.
               </Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   );
};
