import { Flex } from "@chakra-ui/react"

interface VideoSelectorProps {
  videos: any
  setSelectedVideo: Function
}

const VideoSelector = ({setSelectedVideo, videos}: VideoSelectorProps) => {

  return (
    <Flex>
      Video Selector
      {videos.map( (video: any, index: number) => <div key={index}>video {index}</div>)}
    </Flex>
  )
}

export default VideoSelector