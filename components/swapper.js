import { useState } from 'react'
import styled from 'styled-components'
import { Box, Button } from 'grommet'
import { useKey, useMount } from 'react-use';
import { random } from 'lodash'

const animals = [{
  name: "dachshund",
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
  name: "calf",
  divisions: ["cal", "alf"],
  divisionsExp: ["cal", "calf", "alf"],
}, {
  name: "echidna",
  divisions: ["echid", "idna"],
  divisionsExp: ["echid", "echidna", "idna"],
}, {
  name: "dolphin",
  divisions: ["dolph", "olphin"],
  divisionsExp: ["dolph", "olphin", "olphin"],
}, {
  name: "elephant",
  divisions: ["eleph", "ant"],
  divisionsExp: ["el", "eleph", "phant"],
}]

const Outer = styled(Box)`
  width: 200px;
  height: 300px;
  background: rgb(175 237 255);
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

const SwapperContainer = styled(Box)`
  margin-top: 160px;

  @media (max-width: 768px) {
    margin-top: 250px;
  }
`

const ArrowButton = styled(Button)`
  width: 60px;
  margin: 10px 0;
  transition: 0.3s ease all;
  &:hover {
    transform: translateY(-10px);
  }
`

const ArrowButtonDown = styled(Button)`
  width: 60px;
  margin: 10px 0;
  transition: 0.3s ease all;
  &:hover {
    transform: translateY(10px);
  }
`

const Name = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 35px;
`

const BigButton = styled.a`
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  @media (max-width: 1280px) {
    margin-bottom: 100px;
  }
  @media (max-width: 768px) {
    margin-bottom: 240px;
  }

  cursor: pointer;
  width: 500px;  
  position: relative;
  margin-bottom: 150px;
  transition: 0.3s ease all;
  .normal {
    width: 100%;
    height: 100px;
    top: 0;
  }
  .hover {
    width: 100%;
    height: 100px;
    top: 0;
    display: none;
  }
  &:hover {
    div {
      transform: translateY(10px);
    }
    .normal {
      display: none;
    }
    .hover {
      display: block;
    }

  }
  div {
    color: black;
    font-size: 22px;
    height: 80px;
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
  }
`

const Frame = styled.img`
  position: absolute;
  height: 340px;
  transition: 0.3s ease all;
  ${props => {
    if (props.expansion) {
      return "width: 655px;"
    } else {
      return "width: 445px;"
    }
  }
  }
`

const ExpansionPack = styled.div`
  position: absolute;
  right: 70px;
  bottom: 140px;
  width: 200px;

  @media (max-width: 768px) {
    right: 50%;
    bottom: 130px;
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const Toggles = styled.div`
  cursor: pointer;
  height: 60px;
  img {
    position: absolute;
    width: 100px;
    margin-left: 51px;
    margin-top: -5px;
  }
  ${props => {
    if (props.on) {
      return `
        .on {
          opacity: 1;
        }
        .off {
          opacity: 0;
        }
      `
    } else {
      return `
        .on {
          opacity: 0;
        }
        .off {
          opacity: 1;
        }
      `
    }
  }}
`

function Swapper({ position, index, setIndex, expansion }) {
  const animal = animals[index % animals.length]
  return (
    <SwapperOuter align="center" expansion={expansion} position={position}>
      <ArrowButton onClick={() => setIndex(index => index == animals.length - 1 ? 0 : index + 1)}>
        <img src={`/images/arrows/up${position}.png`} />
      </ArrowButton>
      <Outer align="center" justify="center">
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
    if ((index1 === index2) && (index2 === index3)) {
      name = animals[index1].name
    } else if (index1 === index2) {
      name = [animals[index1], animals[index3]]
        .map((item, idx) => item.divisionsExp[idx])
        .join('')
    } else if (index2 === index3) {
      name = [animals[index1], animals[index3]]
        .map((item, idx) => item.divisionsExp[idx])
        .join('')
    } else {
      name = [animals[index1], animals[index2], animals[index3]]
        .map((item, idx) => item.divisionsExp[idx])
        .join('')
    }
  } else if (!expansion) {
    if (index1 === index3) {
      name = animals[index1].name
    } else {
      name = [animals[index1], animals[index3]]
        .map((item, idx) => item.divisions[idx])
        .join('')
    }
  }

  return (
    <Box align="center" fill>
      <Box direction="column" justify="center" align="center" fill>
        <SwapperContainer direction="row" justify="center" align="center">
          <Swapper index={index1} setIndex={setIndex1} expansion={expansion} position="1" />
          <Swapper index={index2} setIndex={setIndex2} expansion={expansion} position="2" />
          <Swapper index={index3} setIndex={setIndex3} expansion={expansion} position="3" />
          <Frame src="/images/redboxlarge.png" expansion={expansion} />
        </SwapperContainer>
        <Name>{name}</Name>
      </Box>
      <BigButton onClick={feelingUnlucky}>
        <img class="normal" src="/images/button.png" />
        <img class="hover" src="/images/button-hover.png" />
        <Box align="center" justify="center">i'm feeling unlucky</Box>
      </BigButton>
      <ExpansionPack>
        <img src="/images/expansionpack.png" />
        <Toggles on={expansion} onClick={() => setExpansion(!expansion)}>
          <img className="on" src="/images/toggle-on.png" />
          <img className="off" src="/images/toggle-off.png" />
        </Toggles>
      </ExpansionPack>
    </Box>
  )
}

