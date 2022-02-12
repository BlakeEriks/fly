import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import VideoPlayer from '../components/VideoPlayer';
import VideoSelector from '../components/VideoSelector';

const MapWithNoSSR = dynamic(
  () => import('../components/LocationSelector'),
  { ssr: false }
)

const Home: NextPage = () => {

  const [maps, setMaps] = useState()
  const [selectedMap, setSelectedMap] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState(0)

  useEffect( () => {
    const fetchMaps = async () => {
      let res = await fetch(`/api/maps`)
      const maps = await res.json()
      setMaps(maps)
      setSelectedLocation(maps[0].locations[0].name)
    }

    fetchMaps()
  }, [])

  return (
    <Flex w="full" h="100vh" direction="column">
      <Navbar />
      <Flex boxSize='full' bg="gray.700" p={10} direction='column' flexGrow={1}>
        <VideoPlayer videoId={maps ? maps[selectedMap].locations[0].videoIds : null}/>
        {selectedLocation}
        <Flex w="full" borderTop={2} borderColor='gray.200' borderStyle="solid">
          <MapWithNoSSR map={maps ? maps[selectedMap] : null} setSelectedLocation={setSelectedLocation}/>
          <VideoSelector setSelectedVideo={setSelectedVideo} videos={[0, 1, 2]}/>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home
