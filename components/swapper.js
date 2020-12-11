import { useState } from 'react'
import styled from 'styled-components'
import { Box, Button } from 'grommet'
import { useKey, useMount } from 'react-use';
import { random } from 'lodash'

const animals = ["camel", "dog", "elephant"]

const Outer = styled(Box)`
  width: 300px;
  height: 400px;
  background: red;
  transition: 0.3s ease all;
`

function Swapper({ position, index, setIndex }) {
  const color = animals[index % animals.length]
  return (
    <Box align="center">
      <Button onClick={() => setIndex(index => ++index)}>/\</Button>
      <Outer align="center" justify="center">
        <img src={`/images/animals/${color}-${position}.png`} />
      </Outer>
      <Button onClick={() => setIndex(index => index == 0 ? animals.length : index - 1)}>\/</Button>
    </Box>
  )
}

export default function Swappers() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  const feelingUnlucky = () => {
    setIndex1(random(0, animals.length))
    setIndex2(random(0, animals.length))
    setIndex3(random(0, animals.length))
  }
  useMount(() => feelingUnlucky())

  return (

    <Box align="center">
      <Box direction="row" justify="center" align="center" >
        <Swapper index={index1} setIndex={setIndex1} position="1" />
        <Swapper index={index2} setIndex={setIndex2} position="2" />
        <Swapper index={index3} setIndex={setIndex3} position="3" />
      </Box>
      <Button primary onClick={feelingUnlucky} style={{ padding: '20px' }}>I'm feeling unlucky</Button>
    </Box>
  )
}

