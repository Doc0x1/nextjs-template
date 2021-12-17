import { createTheme } from '@mui/material'
import { blueGrey, common, deepOrange, lightBlue, red, teal } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blueGrey[800],
    },
    secondary: {
      main: teal['A200'],
    },
    error: {
      main: red[500],
    },
    warning: {
      main: deepOrange['A400'],
    },
    text: {
      primary: common.white,
      secondary: lightBlue['A100'],
    },
    action: {
      active: blueGrey[100],
      hover: blueGrey[100],
    },
  },
  typography: {
    allVariants: {
      color: common.white,
      textTransform: 'none',
    },
  },
})

export default theme
