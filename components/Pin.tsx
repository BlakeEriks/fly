import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import { MouseEventHandler, useState } from "react";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

interface PinProps {
  size?: number
  onClick?: MouseEventHandler<SVGSVGElement>
  selected?: boolean
  onMouseEnter?: Function
  onMouseLeave?: Function
}

const Pin = ({size = 20, onClick, selected = false, onMouseEnter, onMouseLeave}: PinProps) => {

  const pinStyle = {
    cursor: 'pointer',
    stroke: 'none',
    transition: '0.2s all',
    fill: selected ? '#d00' : '#00d'
  };

  const [hover, setHover] = useState(false)

  return (
    <svg 
      height={selected || hover ? size + 5 : size} 
      viewBox="0 0 24 24" 
      style={pinStyle} 
      onClick={onClick} 
      onMouseEnter={() => {setHover(true);onMouseEnter && onMouseEnter()}} 
      onMouseLeave={() => {setHover(false);onMouseLeave && onMouseLeave()}}
    >
      <path d={ICON} />
    </svg>
  );
}

export default Pin;