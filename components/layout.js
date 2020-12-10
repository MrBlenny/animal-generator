import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styled from 'styled-components'
import { Box, Grommet, grommet } from 'grommet'

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

const theme = {
  global: {
    font: {
      size: '18px',
      height: '20px',
    },
  },
};

export default function Layout({ children, home }) {
  return (
    <Grommet theme={theme} background="lightgrey" style={{ height: "100%" }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
      </header>
      <main style={{ width: "100%", height: "100%" }}>{children}</main>
    </Grommet>
  )
}
