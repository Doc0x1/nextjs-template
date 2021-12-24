import { createTheme } from '@mui/material'
import {
  blueGrey,
  blue,
  deepOrange,
  lightBlue,
  red,
  indigo,
} from '@mui/material/colors'

const theme = createTheme({
  palette: {
    mode: 'dark',
    constrastThreshold: 3,
    primary: {
      main: blue[400],
    },
    secondary: {
      main: indigo[900],
    },
    error: {
      main: red[500],
    },
    warning: {
      main: deepOrange['A400'],
    },
    info: {
      main: lightBlue[800],
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
})

export default theme
