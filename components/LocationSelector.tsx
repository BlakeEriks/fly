import { Flex, Text } from "@chakra-ui/react"
import { useState } from "react";
import Map, { Marker } from 'react-map-gl';
import { Location, Map as MyMap }  from "../utils/types";
import Pin from "./Pin";

interface LocationSelectorProps {
  map: MyMap
  selectedLocation?: Location
  setSelectedLocation: Function
}

const LocationSelector = ({ map, selectedLocation, setSelectedLocation }: LocationSelectorProps) => {

  const [locationText, setLocationText] = useState(selectedLocation)
  const [hoverLocation, setHoverLocation] = useState('')

  return (
    <Flex w="40%" direction="column" justify="center" align="center" position="relative" boxShadow="0px 0px 5px rgba(0,0,0,1) inset" p={4} rounded={16}>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        style={{width: "100%"}}
        mapStyle="mapbox://styles/blakeeriks/ckzdcbisu001t14qc0qcyv2nc"
        attributionControl={false}
        {...map}
      >
        {map?.locations.map((location, index) => (
          <Marker key={index} longitude={location.longitude} latitude={location.latitude} anchor="bottom">
            <Pin onClick={() => setSelectedLocation(location)} selected={selectedLocation === location} onMouseEnter={() => setHoverLocation(location.name)} onMouseLeave={() => setHoverLocation('')}/>
          </Marker>
        ))}
      </Map>
      <Text position="absolute" bottom={4} left={4}>
          {hoverLocation ? hoverLocation : selectedLocation?.name}
      </Text>
    </Flex>
  )
}

export default LocationSelector