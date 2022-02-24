import { Flex } from "@chakra-ui/react"
import { ReactEventHandler } from "react"
import { Location } from "utils/types"

interface VideoPlayerProps {
  videoId: string | undefined
  location: Location | undefined
  nextVideo: ReactEventHandler
}

const VideoPlayer = ({location, videoId, nextVideo}: VideoPlayerProps) => {

  const videoUrl = location && videoId ? `https://storage.cloud.google.com/video_drone/${location.name}/${videoId}.mp4` : null

  console.log(videoUrl)

  return (
    <Flex flexGrow={1} h="60vh" justify="center" boxShadow="0px 0px 5px rgba(0,0,0,1) inset" p={4} rounded={16}>
      {videoUrl &&
      <video autoPlay={true} width="100%" height="100%" key={videoUrl} onEnded={nextVideo} style={{background: "black"}}>
        <source 
          src={videoUrl}
          type="video/webm">
        </source>
      </video>}
    </Flex>
  )
}

export default VideoPlayer