import { useState } from 'react'
import styled from 'styled-components'
import { Box, Button } from 'grommet'
import { useKey, useMount } from 'react-use';
import { random } from 'lodash'

const animals = [{
  name: "dog",
  divisions: ["dach", "hund"],
  divisionsExp: ["dach", "achshun", "hund"],
}, {
  name: "worm",
  divisions: ["wor", "orm"],
  divisionsExp: ["wor", "worm", "orm"],
}, {
  name: "camel",
  divisions: ["cam", "mel"],
  divisionsExp: ["cam", "amel", "mel"],
}, {
  name: "echidna",
  divisions: ["echid", "idna"],
  divisionsExp: ["echid", "echidna", "idna"],
}, {
  name: "elephant",
  divisions: ["eleph", "ant"],
  divisionsExp: ["el", "eleph", "phant"],
}]

const Outer = styled(Box)`
  width: 200px;
  height: 300px;
  background: white;
  transition: 0.3s ease all;
`

const SwapperOuter = styled(Box)`
  transition: 0.3s ease all;
  ${(props) => {
    if (!props.expansion && props.position === "1") {
      return `
      transform: translate(50%);
      `;
    }
    if (!props.expansion && props.position === "3") {
      return `
      transform: translate(-50%);
      `;
    }
    if (!props.expansion && props.position === "2") {
      return `
      opacity: 0;
      transform: scale(0.5);
      button {
        opacity: 0;
      }
      `;
    }
  }}
`

const ArrowButton = styled(Button)`
  width: 60px;
  margin: 20px 0;
  transition: 0.3s ease all;
  &:hover {
    transform: translateY(-10px);
  }
`

const ArrowButtonDown = styled(Button)`
  width: 60px;
  margin: 20px 0;
  transition: 0.3s ease all;
  &:hover {
    transform: translateY(10px);
  }
`

const Name = styled.div`
  margin-top: 30px;
  font-size: 40px;
`

const BigButton = styled.a`
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  cursor: pointer;
  width: 500px;
  position: relative;
  margin-bottom: 30px;
  transition: 0.3s ease all;
  &:hover {
    transform: translateY(-10px);
  }
  div {
    color: black;
    font-size: 22px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`


function Swapper({ position, index, setIndex, expansion }) {
  const animal = animals[index % animals.length]
  return (
    <SwapperOuter align="center" expansion={expansion} position={position}>
      <ArrowButton onClick={() => setIndex(index => index == animals.length - 1 ? 0 : index + 1)}>
        <img src={`/images/arrows/up${position}.png`} />
      </ArrowButton>
      <Outer align="center" justify="center" style={position == 2 ? { background: "#effbff" } : {}}>
        <img src={`/images/animals/${animal.name}-${position}.png`} />
      </Outer>
      <ArrowButtonDown onClick={() => setIndex(index => index == 0 ? animals.length - 1 : index - 1)}>
        <img src={`/images/arrows/down${position}.png`} />
      </ArrowButtonDown>
    </SwapperOuter>
  )
}

export default function Swappers() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [expansion, setExpansion] = useState(false)

  const feelingUnlucky = () => {
    setIndex1(random(0, animals.length - 1))
    setIndex2(random(0, animals.length - 1))
    setIndex3(random(0, animals.length - 1))
  }
  useMount(() => feelingUnlucky())

  let name = ''
  if (expansion) {
    if (index1 === index2 === index3) {
      name = animals[index1].name
    } else {
      name = [animals[index1], animals[index2], animals[index3]]
        .map((item, idx) => item.divisionsExp[idx])
        .join('-')
    }
  } else if (!expansion) {
    if (index1 === index3) {
      name = animals[index1].name
    } else {
      name = [animals[index1], animals[index3]]
        .map((item, idx) => item.divisions[idx])
        .join('-')
    }
  }

  return (
    <Box align="center" fill>
      <Box direction="column" justify="center" align="center" fill>
        <Box direction="row" justify="center" align="center" style={{ marginTop: '120px' }}>
          <Swapper index={index1} setIndex={setIndex1} expansion={expansion} position="1" />
          <Swapper index={index2} setIndex={setIndex2} expansion={expansion} position="2" />
          <Swapper index={index3} setIndex={setIndex3} expansion={expansion} position="3" />
        </Box>
        <Name>{name}</Name>
      </Box>
      <Button onClick={() => setExpansion(!expansion)}>{expansion ? "Remove expansion pack" : "Apply Expansion Pack"}</Button>
      <BigButton onClick={feelingUnlucky}>
        <img src="/images/button.png" />
        <Box align="center" justify="center">i'm feeling unlucky</Box>
      </BigButton>
    </Box>
  )
}

