import { Box, Center, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { GiRunningShoe } from 'react-icons/gi';

const Home: NextPage = () => (
  <>
    <Head>
      <title>StepN Companion</title>
    </Head>
    <Center bg='green.100' h='100vh'>
      <Box textAlign='center'>
        <Icon as={GiRunningShoe} fontSize={80} color='gray.700' />
        <Heading textTransform='uppercase' fontWeight={800}>
          StepN Companion
        </Heading>
        <Text fontWeight={600}>
          Unofficial StepN newsletter for all things StepN.
        </Text>
        <Flex mt={4} justify='center' align='center' textAlign='center'>
          <iframe
            src='https://embeds.beehiiv.com/f947b182-df1a-4275-8f3a-4c7031f48b05?slim=true'
            data-test-id='beehiiv-embed'
            frameBorder={0}
            scrolling='no'
            style={{
              margin: 0,
              borderRadius: '0px !important',
              backgroundColor: 'transparent',
              textAlign: 'center',
            }}
          />
        </Flex>
      </Box>
    </Center>
  </>
);

export default Home;
