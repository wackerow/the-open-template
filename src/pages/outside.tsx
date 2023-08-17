import { Flex, Heading, Button, IconButton, Link, Text, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { PageMetadata } from '@/components'
import { useState } from "react"


export default function Outside() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'

  const [option, setOption] = useState("start")

  return (
    <>
      <PageMetadata />
      <main>
        <Flex
          direction="column"
          textAlign="center"
          borderRadius="xl"
          background="bg"
          color="primary"
          flexWrap="wrap"
          maxW="720px" mx="auto" 
          mb={12}
        >
          <Flex direction="column" alignItems="center" justifyContent="center" w={[ '100%', null, '100%']} minH="20vh" bgColor="primary" bgImg={`url("/assets/${isDarkMode ? 'bg_pointDark.png' : 'bg_pointLight.png'}")`} bgSize="cover" bgPosition="center">
            <Link href="/" color="bg" my={6} fontSize="2xl">Back Home</Link>
            <IconButton
              w="fit-content"
              mx="auto"
              icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              bg="bg"
              mt={3}
              _hover={{
                background: "bg",
              }}
            />
          </Flex>
          { option == "start" && (
          <Flex direction="column" alignItems="center" justifyContent="center" p={12} w={[ '100%', null, '100%']} mx="auto"> 
            <Text textStyle="tag">The cave is filled with great beats and a dance of technicolor imagery plays on the far wall.</Text>
            <Text as='button' onClick={() => setOption("inside")}>1. Join the party at the far wall.</Text>
            <Text as='button' onClick={() => setOption("outside")}>2. Go Outside</Text>
          </Flex>
          )}
          </Flex>
          { option !== "start" && (
          <Flex direction="column" alignItems="center" justifyContent="center" p={12} w={[ '100%', null, '50%']} mx="auto"> 
            <Text as="button" onClick={()=> setOption("start")}textStyle="tag">RESET</Text>
          </Flex>
        )}
        { option == "outside" && (
          <Flex direction="column" alignItems="center" justifyContent="center" p={12} w={[ '100%', null, '50%']} mx="auto"> 
            <Text textStyle="tag">In our efforts to ontologically situate the distributed ledger, we discovered a minimal viable order - a just-enough ground from which we can sit back, light a joint, and witness the daybreak of indeterminacy.</Text>
            <Text textStyle="tag">A savage patience in the sirocco wind, a pact of mathematical stoicism.</Text>
            <Text textStyle="tag">We dowsed the soil for voids and Bouly radiations, and retired to our hammocks, expecting everything.</Text>
            <Text textStyle="tag">On the fourth night we heard a blowpipe, an energy combustion polyphonic with lichen and transistors,</Text>
            <Text textStyle="tag">the loud setan backs of sea mice and the kenotic drones of quasiparticles. Light in the darkling plain.</Text>
            <Text textStyle="tag">Authority had been deafed, and a new backdrop was hanging in cybernetic relief, peopled with divinities.</Text>
            <Text textStyle="tag">Tremor, point, and wave: Guess their thoughts.</Text>
          </Flex>
        )}
        { option == "inside" && (
          <Flex direction="column" alignItems="center" justifyContent="center" p={12} w={[ '100%', null, '50%']} mx="auto"> 
            <Text textStyle="h3">YOU DIED</Text>
          </Flex>
        )}
        
        
      </main>
    </>
  )
}
