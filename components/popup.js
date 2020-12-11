import styled from 'styled-components'
import { Box } from 'grommet'
import { useKey } from 'react-use'

const Outer = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  `

const Inner = styled(Box)`
  background: url("/images/box.png");
  color: black;
  width: 700px;
  height: 450px;
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 60px;
  position: relative;

`

const CloseButton = styled.a`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  position: absolute;
  right: 0px;
  top: 0px;
`

export default function Popup({ onClose, open, children }) {
  useKey('Escape', onClose);

  return open && (
    <Outer fill justify="center" align="center">
      <Inner>
        <CloseButton onClick={onClose}>
          <img src="/images/x.png" />
        </CloseButton>
        {children}
      </Inner>
    </Outer>
  )
}

