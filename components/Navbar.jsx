// @mui/material imports
import { Tooltip, Button, ButtonGroup, Typography, IconButton, Toolbar, Box, AppBar, Grid } from '@mui/material'

// @mui/icons-material imports
import { Home as HomeIcon, Login as LoginIcon, AppRegistration as RegisterIcon } from '@mui/icons-material/'

// Navbar
export default function Navbar() {
  return (
    <Grid component="header">
      <AppBar position="static" sx={{ mb: 2 }} enableColorOnDark>
        <Toolbar variant="regular">
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
            }}
          >
            <Typography variant="h5" component="h5" sx={{ lineHeight: 1.5 }}>
              {process.env.NEXT_PUBLIC_WEBSITE_NAME}
            </Typography>
          </Box>
          <ButtonGroup variant="contained">
            <Button href="/login" startIcon={<LoginIcon />}>
              <Typography variant="button">Sign In</Typography>
            </Button>
            <Button href="/register" startIcon={<RegisterIcon />}>
              <Typography variant="button">Register</Typography>
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Grid>
  )
}
