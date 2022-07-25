import { createTheme } from "@material-ui/core";
import { blue, orange } from "@material-ui/core/colors";

const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: blue[500]
    }
  },
});

export default GlobalTheme;