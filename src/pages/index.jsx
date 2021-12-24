import Head from 'next/head'
import Image from 'next/image'
import { CssBaseline, Link, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import styles from '../styles/Home.module.css'
import theme from '../styles/theme'
import Navbar from '../components/Navbar'
import HomePage from './HomePage'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div>
        <Head>
          <title>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</title>
          <meta name="description" content="NextJS Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Navbar />
          <HomePage />
        </main>

        <footer className={styles.footer}>
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <Typography>Powered by </Typography>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
              sx={{ verticalAlign: 'middle' }}
            />
          </Link>
        </footer>
      </div>
    </ThemeProvider>
  )
}
