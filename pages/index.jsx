import Head from 'next/head'
import Image from 'next/image'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import styles from '../styles/Home.module.css'
import theme from '../styles/theme'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Head>
          <title>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</title>
          <meta name="description" content="NextJS Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Navbar />
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </ThemeProvider>
  )
}
