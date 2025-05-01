class GameModel {
  category: string
  description: string
  infos: string[]
  image: string
  system: string
  title: string
  id: number

  constructor(category: string, description: string, infos: string[], image: string, system: string, title: string, id: number) {
    this.category = category
    this.description = description
    this.infos = infos
    this.image = image
    this.system = system
    this.title = title
    this.id = id
  }
}

export default GameModel
