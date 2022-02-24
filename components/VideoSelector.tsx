import { Box, Button, Flex } from "@chakra-ui/react"
import { Location } from "utils/types"

interface VideoSelectorProps {
  setSelectedVideo: Function
  videoIds: string[]
  location: Location
}

const VideoSelector = ({setSelectedVideo, videoIds, location}: VideoSelectorProps) => {

  const getVideoUrl = (videoId: string) => location && videoId ? `https://storage.cloud.google.com/video_drone/${location.name}/${videoId}.mp4` : undefined
  console.log(videoIds)

  return (
    <Flex flexWrap="wrap" justify="space-between" alignItems="center" w="60%" boxShadow="0px 0px 5px rgba(0,0,0,1) inset" p={4} rounded={16} ml={8}>
      {videoIds?.map( (videoId: string) => (
        <Box 
          key={videoId}
          w="30%"
        >
          <button onClick={() => setSelectedVideo(videoId)}>
            <video width="100%" preload="metadata">
              <source src={`${getVideoUrl(videoId)}#t=0.5`} type="video/mp4" />
            </video>
          </button>
        </Box>
      ))}
    </Flex>
  )
}

export default VideoSelector