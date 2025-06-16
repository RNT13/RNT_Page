export interface RawgGame {
  background_image_additional: string
  id: number
  name: string
  background_image: string
  description: string
  released: string
  rating: number
  genres: { name: string }[]
  platforms: { platform: { name: string } }[]
  short_screenshots: { image: string }[]
  website: string
  rating_top: number
  description_raw: string
  developers: { name: string }[]
  publishers: { name: string }[]
  parent_platforms: { platform: { name: string } }[]
  screenshots: { image: string }[]
}
