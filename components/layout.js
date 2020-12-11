import Head from 'next/head'
import styled from 'styled-components'
import { Box, Grommet, grommet } from 'grommet'

export const name = 'Animal Generator'
export const siteTitle = 'Animal Generator v1.0'

const theme = {
  global: {
    font: {
      size: '18px',
      height: '20px',
    },
  },
};

const Logo = styled.img`
  position: absolute;
  left: 30px;
  top: 30px;
  width: 400px;
  
`

const Links = styled(Box)`
  position: absolute;
  right: 0px;
  top: 30px;
  a {
    cursor: pointer;
    font-size: 20px;
    color: black;
  }
`


export default function Layout({ children, home }) {
  return (
    <Grommet
      theme={theme}
      style={{
        height: "100%",
        backgroundImage: `url("/images/watermelon.png")`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: "bottom",
        backgroundSize: "100%",
        backgroundSize: "auto 150px",
      }}
    >
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
      <header>
        <Logo src="/images/logo.png" />
        <Links direction="row" justify="end" pad="large" gap="large">
          <a>about</a>
          <a>request an animal</a>
        </Links>
      </header>
      {children}
    </Grommet>
  )
}
