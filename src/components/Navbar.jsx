import { useState } from 'react'

// @mui/material imports
import {
  Tooltip,
  Button,
  ButtonGroup,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Slide,
  Grid,
  useScrollTrigger,
} from '@mui/material'

// @mui/icons-material imports
import {
  Home as HomeIcon,
  Login as LoginIcon,
  AppRegistration as RegisterIcon,
} from '@mui/icons-material/'
import React from 'react'

function HideOnScroll(props) {
  const { children, window } = props

  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

// Navbar
export default function Navbar(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar variant="dense">
            <IconButton href="/" size="medium">
              <Tooltip title="Home">
                <HomeIcon />
              </Tooltip>
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: 'left',
                pl: '1em',
              }}>
              <Typography variant="h5" component="h5" sx={{ lineHeight: 1.5 }}>
                {process.env.NEXT_PUBLIC_WEBSITE_NAME}
              </Typography>
            </Box>
            {isLoggedIn ? (
              <ButtonGroup variant="contained" color="secondary">
                <Button href="/login" startIcon={<LoginIcon />}>
                  <Typography variant="button">Login</Typography>
                </Button>
                <Button href="/register" startIcon={<RegisterIcon />}>
                  <Typography variant="button">Register</Typography>
                </Button>
              </ButtonGroup>
            ) : null}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  )
}
