import { Box, Center, Heading, Icon, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { GiRunningShoe } from 'react-icons/gi';

type Props = {};

const Success = (props: Props) => {
  return (
    <>
      <Head>
        <title>StepN Companion</title>
      </Head>
      <Center bg='green.100' h='100vh'>
        <Box textAlign='center'>
          <Icon as={GiRunningShoe} fontSize={80} color='gray.700' />
          <Heading textTransform='uppercase' fontWeight={800}>
            Success! You're good to go.
          </Heading>
          <Text fontWeight={600}>
            We'll send you an email weekly about some stuff.
          </Text>
        </Box>
      </Center>
    </>
  );
};

export default Success;
