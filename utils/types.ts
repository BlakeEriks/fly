// Interface to defining our object of response functions
export interface ResponseFuncs {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
}

export interface Map {
  name: String
  longitude: number
  latitude: number
  zoom: number
  locations: Location[]
}

export interface Location {
  name: string
  longitude: number
  latitude: number
  videoIds: string[]
}