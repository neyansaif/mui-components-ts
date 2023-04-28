import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { MuiResponsiveness } from "./components/MuiResponsiveness";
// import { MuiList } from "./components/MuiList";
// import { MuiTable } from "./components/MuiTable";
// import { MuiDrawer } from "./components/MuiDrawer";
// import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
// import { MuiLinks } from "./components/MuiLinks";
// import { MuiNavbar } from "./components/MuiNavbar";
// import { MuiImageList } from "./components/MuiImageList";
// import { MuiAccordion } from "./components/MuiAccordion";
// import { MuiCard } from "./components/MuiCard";
// import { MuiLayout } from "./components/MuiLayout";
// import { MuiAutoComplete } from "./components/MuiAutoComplete";
// import { MuiRating } from "./components/MuiRating";
// import { MuiSwitch } from "./components/MuiSwitch";
// import { MuiCheckBox } from "./components/MuiCheckBox";
// import { MuiRadioButton } from "./components/MuiRadioButton";
// import { MuiSelect } from "./components/MuiSelect";
// import { MuiTextField } from "./components/MuiTextField";
// import { MuiButton } from "./components/MuiButton";
// import { MuiTypography } from "./components/MuiTypography";

const theme = createTheme({
   status: {
      danger: "#e53e3e",
   },
   palette: {
      secondary: {
         main: colors.orange[500],
      },
      neutral: {
         main: colors.grey[500],
      },
   },
});

function App() {
   return (
      <ThemeProvider theme={theme}>
         <div className="App">
            {/* <h1>React Material UI</h1> */}
            {/* <MuiTypography /> */}
            {/* <MuiButton /> */}
            {/* <MuiTextField /> */}
            {/* <MuiSelect /> */}
            {/* <MuiRadioButton /> */}
            {/* <MuiCheckBox /> */}
            {/* <MuiSwitch /> */}
            {/* <MuiRating /> */}
            {/* <MuiAutoComplete /> */}
            {/* <MuiLayout /> */}
            {/* <MuiCard /> */}
            {/* <MuiAccordion /> */}
            {/* <MuiImageList /> */}
            {/* <MuiNavbar />
         <MuiLinks />
         <MuiBreadcrumbs /> */}
            {/* <MuiDrawer /> */}
            {/* <MuiList /> */}
            {/* <MuiTable /> */}
            <MuiResponsiveness />
         </div>
      </ThemeProvider>
   );
}

export default App;
