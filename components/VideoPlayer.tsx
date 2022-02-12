import { Flex } from "@chakra-ui/react"

interface VideoPlayerProps {
  videoId: string
}

const VideoPlayer = (props: VideoPlayerProps) => {

  console.log(props.videoId)

  return (
    <Flex flexGrow={1}>
      Video Player
      <video autoPlay={true} controls width="1000">

        <source 
        src={`https://storage.cloud.google.com/video_drone/Lulumahu_Falls/0345.MP4`}
            type="video/webm">
        </source>
      </video>
    </Flex>
  )
}

export default VideoPlayer