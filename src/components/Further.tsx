import React from 'react'
import { Box, Flex, Link } from '@chakra-ui/react'
import { Rule } from '@/components'

export const Further = () => (
  <Box w="100%">
    <Flex maxW="720px" mx="auto" px={12} py={36}>
        <Rule />
        <Box>
          <Link>Link</Link>
        </Box>
        <Box>
          <Link>Link</Link>
        </Box> 
        <Rule />
    </Flex>
  </Box>
)