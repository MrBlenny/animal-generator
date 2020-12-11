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
  padding: 80px;
  position: relative;
  font-size: 24px;
  line-height: 1.4em;
`

const CloseButton = styled.a`
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  position: absolute;
  right: 0px;
  top: 0px;
  transition: 0.2s ease all;
  &:hover {
    transform: rotate(15deg);
  }
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

