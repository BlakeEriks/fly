import { Box, Flex } from "@chakra-ui/react"
import { useState } from "react";
import Map, { Marker, Popup } from 'react-map-gl';
import Pin from "./Pin";

const LocationSelector = () => {

  const [viewPort, setViewport] = useState({
    // width: '100vw',
    // height: '100vh',
    latitude: 21.485,
    longitude: -157.95,
    zoom: 8.5
  })

  const [selectedLocation, setSelectedLocation] = useState<string | null>()

  return (
    <Flex w="33%" direction="column" position="relative">
      Location Selector
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        style={{width: 400, height: 300}}
        mapStyle="mapbox://styles/blakeeriks/ckzdcbisu001t14qc0qcyv2nc"
        attributionControl={false}
        {...viewPort}
      >
        <Marker longitude={-157.7113} latitude={21.2615} anchor="bottom" >
          <Pin onClick={() => setSelectedLocation("china walls")}/>
        </Marker>
      </Map>
    </Flex>
  )
}

export default LocationSelector