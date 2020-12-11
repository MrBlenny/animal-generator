import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import { Box, Grommet, grommet } from 'grommet'
import Popup from './popup'

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
  transition: 0.2s ease all;
  &:hover {
    transform: rotate(-4deg);
  }
  
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

const Content = styled(Box)`
  transition: 0.1s ease filter;
  background-image: url("/images/watermelon.png");
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: auto 160px;
`

export default function Layout({ children, home }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isRequestOpen, setIsRequestOpen] = useState(false)
  const isPopupOpen = isAboutOpen || isRequestOpen
  return (
    <Grommet
      theme={theme}
      style={{
        height: "100%",
      }}
    >
      <Content fill style={isPopupOpen ? { filter: "blur(5px)" } : {}}>
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
          <link rel="stylesheet" href="https://use.typekit.net/kuw5pxv.css"></link>
        </Head>
        <header>
          <Logo src="/images/logo.png" />
          <Links direction="row" justify="end" pad="large" gap="large">
            <a onClick={() => setIsAboutOpen(true)}>about</a>
            <a onClick={() => setIsRequestOpen(true)}>request an animal</a>
          </Links>
        </header>
        {children}
      </Content>
      <Popup open={isAboutOpen} onClose={() => setIsAboutOpen(false)}>
        This website was made to commemorate the 11th trip ‘round the sun for the most ridiculous person I know, Daniel. I hope it brings you hours of giggles and tongue-ties (maybe when I’ve added a few more animals). I love the heck out of you, and I’m infinitely proud of all of the cool things you do (ridiculous or otherwise).

From one punk to another,

Jess
      </Popup>
      <Popup open={isRequestOpen} onClose={() => setIsRequestOpen(false)}>
        We welcome your requests for the Christmas 2020 launch of
the Ridiculous Animal Generator v2.0. 
Please send any suggestions via snail mail, morse code, carrier pigeon or (as a last resort) the email address below.
ridiculousanimalgenerator@gmail.com
      </Popup>
    </Grommet>
  )
}
