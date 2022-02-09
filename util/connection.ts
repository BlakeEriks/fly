import mongoose, { Schema } from "mongoose"

const { DATABASE_URL } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))

  // Location Schema
  const LocationSchema = new Schema({
    name: {type: String, required: true},
    longitude: {type: Number, required: true},
    latitude: {type: Number, required: true},
    videos: {type: [String], default: []}
  })

  // Map SCHEMA
  const MapSchema = new Schema({
    longitude: {type: Number, required: true},
    latitude: {type: Number, required: true},
    zoom: {type: Number, required: true},
    locations: {type: [Schema.Types.ObjectId], ref: 'Location', default: []}
  })

  // Location Model
  const Location = mongoose.models.Location || mongoose.model("Location", LocationSchema)
  
  // Map MODEL
  const Map = mongoose.models.Map || mongoose.model("Map", MapSchema)

  return { conn, Location, Map }
}