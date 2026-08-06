import React from 'react'
import NextImage from "next/image"
import {
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Box,
} from '@chakra-ui/react'
import {
  PageMetadata,
  Footer,
  SupportProgramme,
} from '@/components'
import { Header } from '@/components/Header'
import Post from '@/interfaces/post'
import { getAllTransmissions } from '@/lib/api'
import { formatDate } from '@/lib/date'
import heroFront from "../../public/assets/om_substrates-album-new.png"
import heroBack from "../../public/assets/albumBackBlank.png"

type Props = {
  transmissions: Post[]
}

export default function Home({ transmissions }: Props) {

  return (
    <Flex direction="column" alignItems="start" justifyContent="space-between" w="100vw">
      <PageMetadata
        title="The Open Machine"
        description=""
        image="https://theopenmachine.net/assets/om_substrates2.png"
      />
      <main>
        <Header />
        <Flex direction="row" alignItems="start" justifyContent="space-between" w="100%" h="100%" flexWrap="wrap">
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={["100%", null, "50%"]}>
            <NextImage priority src={heroFront} alt="The Open Machine" sizes="(max-width: 768px) 100vw, 50vw" />
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" position="relative" w={["100%", null, "50%"]} h="100%" display={['none', null, 'flex']}>
            <NextImage priority src={heroBack} alt="The Open Machine" sizes="50vw" />
            <Box position="absolute" inset="0" ps="5.3vw" pt="6vw" pe="6.2vw" letterSpacing="0.005em">
              <Text fontFamily="sans-serif" fontSize="1.45vw" mb="1em" lineHeight="1.2">
                <Text as="strong" fontWeight="bold">The Open Machine</Text> is a cultural research studio that invokes unlikely alliances across technology and culture to advance ethical, open forms of coordination. We conduct research to produce media, events, and frameworks that capture and project the patterns that emerge.
              </Text>
              <Text fontFamily="sans-serif" fontSize="1.16vw" lineHeight="shorter" mb="1em">Our work draws on the concept of <Text as="strong" fontWeight="bold">immanence</Text> -- the inherent creative capacity of fields or relational systems to generate structure and novelty without central command - in order to understand and navigate the emerging technology landscape. We study immanent social technologies (open-source practices, distributed coordination, and consent-based collaboration) alongside digital technologies, seeking out technical strategies in both that harmonize and expand rather than enclose and capture the creative capacities of nature.</Text>
              <Text fontFamily="sans-serif" fontSize="1.16vw" lineHeight="shorter">As a cultural research studio, our goal is to strategically intervene in tech culture in order to incite new networks and coalitions that share immanent values. This means instigating dialogue and cross-pollination between a diverse range of technologists, theorists, artists - from permaculturalists to programmers to community organizers - in order to broaden our definition of technology and rediscover an integrated sense of its most ethical form.</Text>
            </Box>
          </Flex>
        </Flex>

        <Flex id="what-we-do" direction="column" alignItems="start" justifyContent="space-between" maxW="600px" mx="auto" position="relative" p={10} display={['flex', null, 'none']}>
          <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>What we do</Heading>
          <Text fontSize={['lg', null, '2xl']}>The Open Machine is a cultural research studio that invokes unlikely alliances across technology and culture to advance ethical, open forms of coordination. We conduct research to produce media, events, and frameworks that capture and project the patterns that emerge.</Text>
          <Text mt={5}>Our work draws on the concept of immanence -- the inherent creative capacity of fields or relational systems to generate structure and novelty without central command -- in order to understand and navigate the emerging technology landscape. We study immanent social technologies (open-source practices, distributed coordination, and consent-based collaboration) alongside digital technologies, seeking out technical strategies in both that harmonize and expand rather than enclose and capture the creative capacities of nature.</Text>
          <Text mt={5}>As a cultural research studio, our goal is to strategically intervene in tech culture in order to incite new networks and coalitions that share immanent values. This means instigating dialogue and cross-pollination between a diverse range of technologists, theorists, artists - from permaculturalists to programmers to community organizers - in order to broaden our definition of technology and rediscover an integrated sense of its most ethical form.</Text>
        </Flex>

        {/* Programme CTA Banner */}
        <Link href="/programme" _hover={{ textDecoration: 'none' }} w="100%">
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            w="100%"
            py={4}
            bg="white"
            color="black"
            borderTop="1px solid"
            borderBottom="1px solid"
            borderColor="black"
            _hover={{ bg: 'gray.100' }}
            transition="background 0.2s ease"
          >
            <Text fontSize={['md', null, 'lg']} fontWeight="500" textAlign="center">
              View and Support our 2026 Programme →
            </Text>
          </Flex>
        </Link>

        <Flex id="transmissions" direction="row" alignItems="center" justifyContent="center" w="100%" h="100%" flexWrap="wrap" borderTop={["1px solid"]} borderColor="midtone" py={20}>
          <Flex direction="column" alignItems="center" w={['100%', null, '33%']} justifyContent="center" h="100%" py={10} >
            <Heading color="primary" fontWeight="100" fontSize={['3xl', null, '3xl']} mb={5}>Transmissions</Heading>
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']} maxW="800px">
            <Text fontSize={['lg', null, 'xl']} pl={[25, null, 50]} pr={[25, null, 0]} pt={["15px", null, "0px"]} borderLeft={["0px solid", null, "1px solid"]} borderColor="primary">Dispatches, essays, and announcements from The Open Machine.</Text>
          </Flex>
        </Flex>

        <Flex direction="column" w={['100vw', null, '100vw']}>
          <Box
            w="100%"
            maxW="100%"
            overflow="auto"
            mb={6}
            mt={[5, null, 10]}
            css={{
              whiteSpace: 'nowrap',
              '&::-webkit-scrollbar': { height: '8px' },
              '&::-webkit-scrollbar-track': { background: 'transparent' },
              '&::-webkit-scrollbar-thumb': { background: 'var(--chakra-colors-primary)', borderRadius: '4px' },
            }}
          >
            {transmissions.map((post) => (
              <Box
                key={post.slug}
                display="inline-block"
                w={['85vw', null, '420px']}
                verticalAlign="top"
                p={2.5}
              >
                <Link
                  href={`/transmissions/${post.slug}`}
                  border="1px solid"
                  borderColor="muted"
                  p={3}
                  display="block"
                  _hover={{ borderColor: "primary" }}
                  h="100%"
                  css={{ whiteSpace: 'normal' }}
                >
                  <Box
                    w="100%"
                    h={['320px', null, '360px']}
                    overflow="hidden"
                    mb={4}
                  >
                    <Image
                      src={post.imagePath}
                      alt={post.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      objectPosition="center center"
                      display="block"
                    />
                  </Box>
                  <Text fontSize={['xs', null, 'sm']} mb={3}>
                    <i>{formatDate(post.date)}</i>
                  </Text>
                  <Heading fontSize={['md', null, 'lg']} mb={3}>{post.title}</Heading>
                  <Text fontSize={['sm', null, 'md']}>{post.excerpt}</Text>
                </Link>
              </Box>
            ))}
          </Box>
        </Flex>

        <Flex id="media" direction="row" alignItems="center" justifyContent="center" w="100%" h="100%" flexWrap="wrap" borderTop={["1px solid"]} borderColor="midtone" py={20}>
          <Flex direction="column" alignItems="center" w={['100%', null, '33%']} justifyContent="center" h="100%" py={10} >
            <Heading color="primary" fontWeight="100" fontSize={['3xl', null, '3xl']} mb={5}>Media</Heading>
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']} maxW="800px">
            <Text fontSize={['lg', null, 'xl']} pl={[25, null, 50]} pr={[25, null, 0]} pt={["15px", null, "0px"]} borderLeft={["0px solid", null, "1px solid"]} borderColor="primary">Open Machine media takes the form of zines, books, posters, and other web content. All work is licensed Creative Commons. In some cases, our work is commissioned by aligned actors in technology or the academic space.</Text>
          </Flex>
        </Flex>

        <Flex direction="column" w={['100vw', null, '100vw']}>
          <Box
            w="100%"
            maxW="100%"
            overflow="auto"
            mb={6}
            mt={[5, null, 10]}
            css={{
              whiteSpace: 'nowrap',
              '&::-webkit-scrollbar': { height: '8px' },
              '&::-webkit-scrollbar-track': { background: 'transparent' },
              '&::-webkit-scrollbar-thumb': { background: 'var(--chakra-colors-primary)', borderRadius: '4px' },
            }}
          >
            {[
              {
                href: '/earth-computer',
                title: 'Ethereum: The Earth Computer',
                description: 'Poster',
                descriptionItalic: 'Research, Writing and Design',
                image: '/assets/assembly_wall.png',
                alt: 'Ethereum: The Earth Computer'
              },
              {
                href: '/ethereum-localism-book',
                title: 'Ethereum Localism: Grounding the Future of Coordination',
                description: 'Book',
                descriptionItalic: 'Editing, Design, and Publishing',
                image: '/assets/EthLocalism_cover-on-table.png',
                alt: 'Ethereum Localism'
              },
              {
                href: '/inverted-city',
                title: 'Inverted City',
                description: 'Zine',
                descriptionItalic: 'Writing, Editing, and Publishing',
                image: '/assets/InvertedCity_zines-on-table.png',
                alt: 'Inverted City'
              },
              {
                href: '/friends-of-the-outside',
                title: 'Friends of the Outside',
                description: 'Booklet',
                descriptionItalic: 'Writing, Design, and Publishing',
                image: '/assets/FotO_physical-outside.jpg',
                alt: 'Friends of the Outside'
              },
              {
                href: '/undercapital',
                title: 'Undercapital',
                description: 'Zine',
                descriptionItalic: 'Research, Writing, and Publishing',
                image: '/assets/undercapitalZines.png',
                alt: 'Undercapital cover'
              },
              {
                href: '/gfel',
                title: 'GFEL',
                description: 'Poster',
                descriptionItalic: 'Writing & Design',
                image: '/assets/gfel_poster.png',
                alt: 'gfel poster'
              },
            ].map((item, i) => (
              <Box
                key={i}
                display="inline-block"
                w={['85vw', null, '800px']}
                verticalAlign="top"
                p={2.5}
              >
                <Link
                  href={item.href}
                  border="1px solid"
                  borderColor="muted"
                  p={3}
                  display="block"
                  _hover={{ borderColor: "primary" }}
                  h="100%"
                  css={{ whiteSpace: 'normal' }}
                >
                  <Heading fontSize={['md', null, 'lg']} mb={3}>{item.title}</Heading>
                  <Text fontSize={['sm', null, 'md']} mb={3}>
                    {item.description} - <Text as="i" fontStyle="italic">{item.descriptionItalic}</Text>
                  </Text>
                  <Box
                    w="100%"
                    h={['360px', null, '800px']}
                    maxH="800px"
                    overflow="hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      objectPosition="center center"
                      display="block"
                    />
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>
        </Flex>

        <Flex id="events" direction="row" alignItems="center" justifyContent="start" w="100%" flexWrap="wrap" borderTop="1px solid" borderColor="midtone">
          <Flex direction="column" alignItems="center" w={['100%', null, '35%']} justifyContent="center" mr={10} h="100%" py={10}>
            <Heading color="primary" fontWeight="100" fontSize={'3xl'} mb={5}>Events</Heading>
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']} maxW="800px">
            <Text fontSize={['lg', null, 'xl']} pl={[25, null, 50]} pr={[25, null, 0]} pt={[0, null, 12]} borderLeft={["0px solid", null, "1px solid"]} borderColor="primary">Open Machine plays an interstitial role in the emerging technology space, organizing discourse and cultural production around provocative hybrids. We do so in order to build broad coalitions that reflect the diverse embodiments of immanent social strategies. We pay special attention to discourse and cultural schelling points that extend across traditional domains.</Text>
          </Flex>
        </Flex>


        <Flex direction="column" w={["100%", null, "100%"]} pl={[0, null, 10]}>
          <Box
            w="100%"
            maxW="100%"
            overflow="auto"
            mb={6}
            mt={[5, null, 10]}
            css={{
              whiteSpace: 'nowrap',
              '&::-webkit-scrollbar': { height: '8px' },
              '&::-webkit-scrollbar-track': { background: 'transparent' },
              '&::-webkit-scrollbar-thumb': { background: 'var(--chakra-colors-primary)', borderRadius: '4px' },
            }}
          >
            {[
              { src: '/assets/events/gfel25_salon.jpg', alt: 'GFEL 2025 Salon' },
              { src: '/assets/events/event_1.jpeg', alt: 'Open Machine Event' },
              { src: '/assets/events/event_2.jpeg', alt: 'Open Machine Gathering' },
              { src: '/assets/events/event_3.jpeg', alt: 'Open Machine Workshop' },
              { src: '/assets/events/event_4.jpeg', alt: 'Open Machine Evening' },
              { src: '/assets/events/event_5.jpeg', alt: 'Open Machine Outdoor Session' },
            ].map((img, i) => (
              <Box
                key={i}
                display="inline-block"
                w={['85%', null, '60%']}
                h={['100vh', null, '600px']}
                maxH="600px"
                p={2.5}
                verticalAlign="top"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  objectPosition="center center"
                  display="block"
                />
              </Box>
            ))}
          </Box>
        </Flex>

        <Flex direction="row" alignItems="start" justifyContent="space-between" w={['100%', null, '100%']} flexWrap="wrap">
          <Flex direction="column" gap={3} mt={5} fontSize={['sm', null, 'md']} w={['100%', null, '50%']} p={10}>
            <Text>Movie Club - <i>Open Machine Mindfuck Movie Club</i>, cyberspace, monthly beginning April 2026</Text>
            <Text>Gathering - <i>Open Protocols Convene</i>, Boulder, Colorado 2025</Text>
            <Text>Salon - <i>Open Protocols Social</i>, Portland, Oregon 2025</Text>
            <Text>Workshop - <i>Polycentric Equity Swap Game</i>, Devconnect Buenos Aires, Argentina 2025</Text>
            <Text>Workshop - <i>Assembly in Ethereum</i>, Schelling Point Devconnect Buenos Aires, Argentina 2025</Text>
            <Text>Gathering - <i>GFEL II</i>, Boulder, Colorado 2025</Text>
            <Text>Workshop - <i>Institutions, Extitutions and the Body without Organs</i> - Huy, Belgium 2024</Text>
            <Text>Salon - <i>OSS: Open Salon Series</i>, Portland, Oregon 2024</Text>
          </Flex>
          <Flex direction="column" gap={3} mt={5} fontSize={['sm', null, 'md']} w={['100%', null, '50%']} p={10} >

            <Text>Lecture Series - <i>Local DAO Summer</i>, cyberspace 2024</Text>
            <Text>Salon - <i>Imagination Circle</i> - Portland, Oregon 2024</Text>
            <Text>Gathering - <i>General Forum on Ethereum Localism</i>, Portland, Oregon 2024</Text>
            <Text>Salon - <i>Cybernetics and Public Goods</i>, MCON 3 - Detroit, Michigan 2023</Text>
            <Text>Salon - <i>Decentralized Independent Publishing as Protocol</i>, Devcon - Istanbul, Turkey 2023</Text>
            <Text>Salon - <i>Crypto's Philosophical Underground</i> - Barcelona 2023</Text>
            <Text>Salon - <i>Who weaves the weavers?</i>, SeoulBound, Seoul, Korea, 2023</Text>
          </Flex>

        </Flex>

        <Flex id="research" direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap" borderTop="1px solid" borderColor="midtone">
          {/* Left column - Heading and intro */}
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
            <Heading color="primary" fontWeight="900" fontSize={'3xl'} mb={5}>Research</Heading>
            <Text>To the end of tracing out the lineage and current frontiers of immanent social organization, Open Machine applies philosophical foundations to cultural history in order to bring insight and ethical clarity to the emerging technology space. We identify diverse parties, including individuals and collective and networked entities, and show how they exert agency and display intelligence in contexts that surpass institutional legibility. Whether it's in the distributed yet concerted intelligence of cultural undergrounds, the avant garde financial assemblages of DAOs, the anonymous intentionality of LLMs, or the crowd-consciousness of cultural archetypes and memes, sensitivity to these actors yields insights about emerging technologies and the intelligence they harness that will cause sea change in the coming years.</Text>
          </Flex>

          {/* Right column - Research Topics and Past Research */}
          <Flex direction="column" w={['100%', null, '60%']} mt={[5, null, 0]}>
            {/* Research Topics */}
            <Heading fontSize={['lg', null, 'xl']} mb={5} color="primary">Research Topics</Heading>
            <Flex direction="row" alignItems="stretch" justifyContent="space-between" flexWrap="wrap">
              <Box w={['100%', null, '50%']} p={[2, null, 3]} display="flex">
                <Box border="1px solid" borderColor="primary" p={5} flex="1">
                  <Heading fontSize={['md', null, 'lg']} mb={5}>Diverse Intelligence</Heading>
                  <Text fontSize="sm">Michael Levin's TAME (Technological Approach to Mind Everywhere) framework proposes that cognition and goal-directed behavior are substrate-independent properties present wherever information processing serves to navigate a problem space. This research program extends that framework into social and cultural formations. Movements, scenes, and subcultures meet the functional criteria for cognitive organisms: they exhibit distributed intelligence, probe latent problem spaces inaccessible to institutional perception, and develop collective knowledge without centralized control. We study the characteristic umwelts of underground formations, asking what dimensions of reality they are sensitive to and why. The program also takes up what Levin calls "mind-blindness": the institutional tendency to deny cognitive status to non-standard intelligences, and its political consequences.</Text>
                </Box>
              </Box>
              <Box w={['100%', null, '50%']} p={[2, null, 3]} display="flex">
                <Box border="1px solid" borderColor="primary" p={5} flex="1">
                  <Heading fontSize={['md', null, 'lg']} mb={5}>Cognitive Security</Heading>
                  <Text fontSize="sm">The most consequential form of political domination in the current period operates through the systematic conditioning of consciousness: what Bernard Stiegler called "symbolic misery." This research program investigates how that conditioning can be resisted. Two primary archives provide the empirical foundation: the 1960s-70s black music tradition (Coltrane, Hendrix, Marley) and the California psychedelic scene (Robert Anton Wilson, Philip K. Dick, Terence McKenna). Both developed practical technologies for maintaining perceptual and epistemic autonomy under adversarial conditions. Pantheistic cosmologies, sound system culture, and "total suspicion" epistemologies are studied here as operative cognitive security frameworks. The emergence of algorithmically personalized information environments makes this archive newly urgent: what did these movements know about maintaining cognitive independence under ontological shock, and how does that translate into design for epistemic autonomy today?</Text>
                </Box>
              </Box>
              <Box w={['100%', null, '50%']} p={[2, null, 3]} display="flex">
                <Box border="1px solid" borderColor="primary" p={5} flex="1">
                  <Heading fontSize={['md', null, 'lg']} mb={5}>Open Coordination Infrastructure</Heading>
                  <Text fontSize="sm">This program traces the structural isomorphism between open-source protocol culture and urban cultural undergrounds: rave scenes, S/M communities, psychedelic networks, direct action organizations. All share the same operational logic, a twin commitment to open-ended empiricism and memetic knowledge circulation. Core concepts developed here, including open protocols, extitutions, formalization without standardization, overgrounding, and undercapital, explain how underground communities have sustained coordination, capture resistance, and alternative value creation without institutional form. The research asks what decentralized network technologies can offer these communities, and what underground cultural history has to teach protocol designers. The resulting encounter, between communities with decades of extitutional practice and designers with scale-agnostic infrastructure, is the central horizon of this work.</Text>
                </Box>
              </Box>
              <Box w={['100%', null, '50%']} p={[2, null, 3]} display="flex">
                <Box border="1px solid" borderColor="primary" p={5} flex="1">
                  <Heading fontSize={['md', null, 'lg']} mb={5}>Technedelics: Interfaces as Exploratory Media</Heading>
                  <Text fontSize="sm">The use of AR, VR, game engines, and hybrid interfaces as perceptual instruments for exploring new environments and generating new subjectivities, inspired by Michael Levin's work on <Link href="https://www.frontiersin.org/journals/systems-neuroscience/articles/10.3389/fnsys.2022.768201/full" isExternal textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="3px">"latent spaces"</Link> and Felix Guattari's <Link href="https://monoskop.org/images/archive/2/24/20150326135144%21Guattari_Felix_Chaosmosis_An_Ethico-Aesthetic_Paradigm.pdf" isExternal textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="3px">"ethico-aesthetic paradigm"</Link>. Where conventional media positions the user as spectator, technedelic interfaces function as exploratory media: tools for extending the perceptual range of consciousness into territories that would otherwise remain inaccessible to direct experience. The paradigm draws on psychedelic practice not as metaphor but as method — treating the interface as a threshold through which new cognitive and aesthetic territories become available for mapping. Research here examines how digital environments can be designed to expand rather than narrow the umwelt of their users, generating new subjectivities rather than colonizing existing ones.</Text>
                </Box>
              </Box>
            </Flex>

            {/* Past Research */}
            <Heading fontSize={['lg', null, 'xl']} mt={8} mb={3} color="primary">Past Research</Heading>
            <Text fontSize="sm" mb={5}>Specific research vectors we have undertaken in the recent past include:</Text>
            <Flex direction="column" gap={4}>
              <Box border="1px solid" borderColor="primary" p={5}>
                <Heading fontSize={['md', null, 'lg']} mb={3}>Ethnographic Study of the Protocol Underground</Heading>
                <Text fontSize="sm" mb={3}>Fieldwork and engagement with the archive and living communities on underground formations, their meta-protocols, and the strategies through which they maintain coherence without institutional capture.</Text>
                <Text fontSize="sm">
                  Outputs:{' '}
                  <Link href="https://exeuntisunderground.substack.com/p/sketches-toward-a-theory-of-the-protocol?utm_source=profile&utm_medium=reader2" isExternal textDecoration="underline">(1)</Link>{' '}
                  <Link href="https://exeuntisunderground.substack.com/p/undercapital?utm_source=profile&utm_medium=reader2" isExternal textDecoration="underline">(2)</Link>{' '}
                  <Link href="https://exeuntisunderground.substack.com/p/speculative-p2p-and-the-urban-protocol?utm_source=profile&utm_medium=reader2" isExternal textDecoration="underline">(3)</Link>{' '}
                  <Link href="https://exeuntisunderground.substack.com/p/undercapital-redux?utm_source=profile&utm_medium=reader2" isExternal textDecoration="underline">(4)</Link>{' '}
                  <Link href="https://exeuntisunderground.substack.com/p/2026-the-rise-of-the-protocol-underground?utm_source=profile&utm_medium=reader2" isExternal textDecoration="underline">(5)</Link>{' '}
                  <Link href="https://exeuntisunderground.substack.com/p/diverse-intelligence-and-the-protocol?utm_source=profile&utm_medium=reader2" isExternal textDecoration="underline">(6)</Link>{' '}
                  <Link href="https://paragraph.com/@openprotocolresearch/oprg-interview-series-mark-lakeman-of-city-repair" isExternal textDecoration="underline">(Ethnographic interview with Mark Lakeman)</Link>
                </Text>
              </Box>
              <Box border="1px solid" borderColor="primary" p={5}>
                <Heading fontSize={['md', null, 'lg']} mb={3}>The Modern Guild</Heading>
                <Text fontSize="sm" mb={3}>Guild Guild is a community of practice that studies the modern guild form (ala <Link href="https://www.protocolguild.org/" isExternal textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="3px">Protocol Guild</Link>) and distributes reference architecture so others can freely replicate the form as a model for commons infrastructure development and maintenance.</Text>
                <Text fontSize="sm">
                  Output:{' '}
                  <Link href="https://guildguild.org/" isExternal textDecoration="underline">(1)</Link>{' '}
                  <Link href="https://paragraph.com/@guildguild/guilds-reference-architecture" isExternal textDecoration="underline">(2)</Link>
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex id="process" direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap" borderTop="1px solid" borderColor="midtone">
          {/* Left column - Just heading */}
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
            <Heading color="primary" fontWeight="900" fontSize={'3xl'} mb={5}>Process</Heading>
          </Flex>

          {/* Right column - Cards */}
          <Flex direction="column" w={['100%', null, '60%']} mt={[5, null, 0]} gap={[4, null, 5]}>
            {/* Immanence */}
            <Box border="1px solid" borderColor="primary" p={[5, null, 8]}>
              <Flex direction={['column', null, 'row']} gap={[4, null, 8]} alignItems="start">
                <Box flexShrink={0}>
                  <Box as="svg" w="80px" h="80px" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" color="primary">
                    <path d="M10 20 Q20 12, 30 20 Q40 28, 50 20 Q60 12, 70 20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M10 34 Q20 26, 30 34 Q40 42, 50 34 Q60 26, 70 34" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M10 48 Q20 40, 30 48 Q40 56, 50 48 Q60 40, 70 48" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M10 62 Q20 54, 30 62 Q40 70, 50 62 Q60 54, 70 62" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </Box>
                </Box>
                <Box flex="1">
                  <Heading fontSize={['md', null, 'lg']} mb={4}>Immanence</Heading>
                  <Text fontSize="sm" mb={3}>The Open Machine has identified core characteristics of immanent, open technologies.</Text>
                  <Text fontSize="sm" mb={3}>These technologies</Text>
                  <Flex direction="column" gap={2} mb={4}>
                    <Box border="1px solid" borderColor="primary" px={4} py={3}>
                      <Text fontSize="sm"><Text as="b">distribute agency</Text> rather than depending on passivity, complacency or obedience</Text>
                    </Box>
                    <Box border="1px solid" borderColor="primary" px={4} py={3}>
                      <Text fontSize="sm">allow <Text as="b">aesthetic co-creation</Text> rather than expecting spectatorship</Text>
                    </Box>
                    <Box border="1px solid" borderColor="primary" px={4} py={3}>
                      <Text fontSize="sm">actively affirm <Text as="b">consent</Text> against coercion</Text>
                    </Box>
                    <Box border="1px solid" borderColor="primary" px={4} py={3}>
                      <Text fontSize="sm">provoke and engage <Text as="b">processuality</Text> against binary thinking</Text>
                    </Box>
                    <Box border="1px solid" borderColor="primary" px={4} py={3}>
                      <Text fontSize="sm">document and <Text as="b">open protocolize</Text> their practical insights against enclosure and capture</Text>
                    </Box>
                  </Flex>
                  <Text fontSize="sm">Instances of any of these are of value, but together they activate into a powerful ensemble of techniques for avoiding the traps and insufficiencies of the old institutional forms and harnessing the creative powers of immanence. Moreover, when technologies or technical communities display these forms, it shows us they are ripe for generative engagement with other nodes.</Text>
                </Box>
              </Flex>
            </Box>

            {/* Collision */}
            <Box border="1px solid" borderColor="primary" p={[5, null, 8]}>
              <Flex direction={['column', null, 'row']} gap={[4, null, 8]} alignItems="start">
                <Box flexShrink={0}>
                  <Box as="svg" w="80px" h="80px" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" color="primary">
                    <circle cx="28" cy="40" r="18" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <circle cx="52" cy="40" r="18" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M38 28 L42 28" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                    <path d="M36 32 L44 32" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                    <path d="M35 36 L45 36" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                    <path d="M35 40 L45 40" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                    <path d="M35 44 L45 44" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                    <path d="M36 48 L44 48" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                    <path d="M38 52 L42 52" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                  </Box>
                </Box>
                <Box flex="1">
                  <Heading fontSize={['md', null, 'lg']} mb={4}>Collision</Heading>
                  <Text fontSize="sm">In order to lean into the chaos and unpredictability of cultural and technical cross-pollination, we construct what we refer to as collision events, provocative research paradigms and gatherings of parties from diverse technical cultures and discourse communities, grounded only against our working rubric of immanent technology. Because our definition of technology is broad, these collision events become rich sites of inquiry and cultural production; i.e. What does Open Source Software have to do with BDSM? What do meditation techniques have to do with organization theory?</Text>
                </Box>
              </Flex>
            </Box>

            {/* Modulation/Composition */}
            <Box border="1px solid" borderColor="primary" p={[5, null, 8]}>
              <Flex direction={['column', null, 'row']} gap={[4, null, 8]} alignItems="start">
                <Box flexShrink={0}>
                  <Box as="svg" w="80px" h="80px" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" color="primary">
                    <path d="M10 55 Q25 15, 40 40 Q55 65, 70 25" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M10 60 Q25 20, 40 45 Q55 70, 70 30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
                    <path d="M10 50 Q25 10, 40 35 Q55 60, 70 20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
                    <circle cx="40" cy="40" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <circle cx="40" cy="40" r="1" fill="currentColor"/>
                  </Box>
                </Box>
                <Box flex="1">
                  <Heading fontSize={['md', null, 'lg']} mb={4}>Modulation/Composition</Heading>
                  <Text fontSize="sm">In the aftermath of these encounters, we (and the community we've instigated) undergo a process of synthesis, modulating inputs in order to generate a new equilibrium. This isn't to distill into any new terminal narrative, but rather to produce the dynamic and pluralistic ground that genuinely new cultural spaces entail. A past example is the Ethereum Localism book, which attempted to render the productive chaos of the first two Ethereum Localism forums into a metastable coherence.</Text>
                </Box>
              </Flex>
            </Box>

            {/* Service */}
            <Box border="1px solid" borderColor="primary" p={[5, null, 8]}>
              <Flex direction={['column', null, 'row']} gap={[4, null, 8]} alignItems="start">
                <Box flexShrink={0}>
                  <Box as="svg" w="80px" h="80px" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" color="primary">
                    <path d="M40 10 L40 38" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M25 10 L25 30" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                    <path d="M55 10 L55 30" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                    <path d="M25 30 Q25 45, 40 45 Q55 45, 55 30" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M40 45 L40 55" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="15" y1="65" x2="65" y2="65" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="30" y1="60" x2="50" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                    <line x1="20" y1="70" x2="60" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                  </Box>
                </Box>
                <Box flex="1">
                  <Heading fontSize={['md', null, 'lg']} mb={4}>Service</Heading>
                  <Text fontSize="sm" mb={3}>In order to maintain sustainability, we offer services when and where mission alignment is evident, in the form of:</Text>
                  <Box as="ul" pl={5} listStyleType="disc">
                    <Box as="li" mb={1}><Text fontSize="sm">Frameworks and workshops</Text></Box>
                    <Box as="li" mb={1}><Text fontSize="sm">Media production</Text></Box>
                    <Box as="li" mb={1}><Text fontSize="sm">Community expansion and discovery</Text></Box>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>

        {/* <Flex direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap" borderTop="1px solid" borderColor="primary">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
              <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Network</Heading>
              <p>The Open Machine convenes temporary assemblies where ideas meet bodies and something gets made. Salons, workshops, lecture series, unconferences, gatherings. Spaces for interstitial productivity. Events come first. Structures dissolve afterward.</p>
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']}>
            <Flex direction="column" gap={3} mt={5}>
              <Link href="https://allocapital.io" target="_blank"><Text>Allo Capital</Text></Link>
              <Link href="https://block.science" target="_blank"><Text>Block.science</Text></Link>
              <Link href="https://daohaus.club" target="_blank"><Text>DAOhaus</Text></Link>
              <Link href="https://gitcoin.co" target="_blank"><Text>Gitcoin</Text></Link>
              <Link href="https://hatsprotocol.xyz" target="_blank"><Text>Hats</Text></Link>
              <Link href="https://hypercerts.org" target="_blank"><Text>Hypercerts</Text></Link>
              <Link href="https://metacartel.org" target="_blank"><Text>MetaCartel</Text></Link>
              <Link href="https://metagov.org" target="_blank"><Text>Metagov</Text></Link>
              <Link href="https://opencivics.co" target="_blank"><Text>Open Civics</Text></Link>
              <Link href="https://publicnouns.wtf" target="_blank"><Text>Public Nouns</Text></Link>
              <Link href="https://raidguild.org" target="_blank"><Text>Raid Guild</Text></Link>
              <Link href="https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/" target="_blank"><Text>Stanford Codex</Text></Link>
            </Flex>
          </Flex>
        </Flex> */}

        <SupportProgramme />

        <Footer />

      </main >
    </Flex >
  )
}

export async function getStaticProps() {
  const transmissions = getAllTransmissions([
    'title',
    'matter',
    'slug',
    'author',
    'excerpt',
    'date',
    'imagePath',
  ]).map(post => {
    const dateValue = post.date as string | Date
    return {
      ...post,
      date: dateValue instanceof Date ? dateValue.toISOString() : String(dateValue),
    }
  })

  return {
    props: {
      transmissions,
    },
  }
}
