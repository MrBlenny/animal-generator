import { useState } from 'react'
import styled from 'styled-components'
import { Box, Button } from 'grommet'
import { useKey, useMount } from 'react-use';
import { random } from 'lodash'

const colors = ["red", "yellow", "pink", "green", "darkblue", "blue", "pink", "purple"]

const Outer = styled(Box)`
  width: 600px;
  height: 400px;
  background: red;
  transition: 0.3s ease all;
`

function Swapper({ type, index, setIndex }) {
  const color = colors[index % colors.length]
  return (
    <Box align="center" pad="small">
      <Button onClick={() => setIndex(index => ++index)}>/\</Button>
      <Outer align="center" justify="center" style={{ background: color }} >
        {type}
      </Outer>
      <Button onClick={() => setIndex(index => index == 0 ? colors.length : index - 1)}>\/</Button>
    </Box>
  )
}

export default function Swappers() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  const feelingUnlucky = () => {
    setIndex1(random(0, colors.length))
    setIndex2(random(0, colors.length))
    setIndex3(random(0, colors.length))
  }
  useMount(() => feelingUnlucky())

  return (

    <Box align="center">
      <Box direction="row" justify="center" align="center" >
        <Swapper index={index1} setIndex={setIndex1} />
        <Swapper index={index2} setIndex={setIndex2} />
        <Swapper index={index3} setIndex={setIndex3} />
      </Box>
      <Button primary onClick={feelingUnlucky} style={{ padding: '20px' }}>I'm feeling unlucky</Button>
    </Box>
  )
}

