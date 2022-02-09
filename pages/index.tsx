import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import VideoPlayer from '../components/VideoPlayer';
import VideoSelector from '../components/VideoSelector';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/LocationSelector'),
  { ssr: false }
)

const Home: NextPage = () => {
  return (
    <Flex w="full" h="100vh" direction="column">
      <Navbar />
      <Flex boxSize='full' bg="gray.700" p={10} direction='column' flexGrow={1}>
        <VideoPlayer />
        <Flex w="full" borderTop={2} borderColor='gray.200' borderStyle="solid">
          <DynamicComponentWithNoSSR />
          <VideoSelector />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home
