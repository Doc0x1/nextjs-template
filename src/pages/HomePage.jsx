import { Container, Box, Typography, Paper } from '@mui/material'

export default function Home() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '100%',
          },
        }}>
        <Paper
          elevation={16}
          sx={{
            height: '100vh',
            padding: '1em',
          }}>
          <Typography textAlign="center">Test</Typography>
        </Paper>
      </Box>
    </Container>
  )
}
