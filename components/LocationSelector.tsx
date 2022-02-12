import { Flex } from "@chakra-ui/react"
import Map, { Marker } from 'react-map-gl';
import { Map as MyMap }  from "../utils/types";
import Pin from "./Pin";

interface LocationSelectorProps {
  map: MyMap | null
  setSelectedLocation: Function
}

const LocationSelector = ({ map, setSelectedLocation }: LocationSelectorProps) => {

  return (
    <Flex w="33%" direction="column" position="relative">
      Location Selector
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        style={{width: 400, height: 300}}
        mapStyle="mapbox://styles/blakeeriks/ckzdcbisu001t14qc0qcyv2nc"
        attributionControl={false}
        {...map}
      >
        {map?.locations.map(({longitude, latitude, name}, index) => (
          <Marker key={index} longitude={longitude} latitude={latitude} anchor="bottom" >
            <Pin onClick={() => setSelectedLocation(name)}/>
          </Marker>
        ))}
      </Map>
    </Flex>
  )
}

export default LocationSelector