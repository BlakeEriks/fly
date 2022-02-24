import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Location, Map } from 'utils/types';
import Navbar from '../components/Navbar';
import VideoPlayer from '../components/VideoPlayer';
import VideoSelector from '../components/VideoSelector';

const MapWithNoSSR = dynamic(
  () => import('../components/LocationSelector'),
  { ssr: false }
)

const Home: NextPage = () => {

  const [maps, setMaps] = useState<Map[]>()
  const [selectedMap, setSelectedMap] = useState<Map>()
  const [selectedLocation, setSelectedLocation] = useState<Location>()
  const [selectedVideo, setSelectedVideo] = useState<string>()

  console.log(selectedVideo)

  useEffect( () => {
    const fetchMaps = async () => {
      let res = await fetch(`/api/maps`)
      const maps = await res.json()
      setMaps(maps)
      setSelectedMap(maps[0])
      setSelectedLocation(maps[0].locations[0])
      setSelectedVideo(maps[0].locations[0].videoIds[0])
    }
    fetchMaps()
  }, [])

  useEffect( () => {
    if (selectedLocation) {
      setSelectedVideo(selectedLocation.videoIds[0])
    }
  }, [selectedLocation])

  const nextVideo = () => {
    let index = selectedVideo ? selectedLocation!.videoIds.indexOf(selectedVideo) + 1 : 0
    index = index === selectedLocation!.videoIds.length ? 0 : index
    setSelectedVideo(selectedLocation!.videoIds[index])
  }

  return (
    <Flex height="100vh" direction="column" align="center" justify="center" bg="gray.300"  m="auto">
      <Navbar />
      <Flex  bg="gray.700" p={10} direction='column' justify="space-between">
        <VideoPlayer videoId={selectedVideo} location={selectedLocation} nextVideo={nextVideo}/>
        <Flex h="35vh">
          {selectedMap && <MapWithNoSSR map={selectedMap} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation}/>}
          {selectedLocation && <VideoSelector setSelectedVideo={setSelectedVideo} videoIds={selectedLocation.videoIds} location={selectedLocation}/>}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home
