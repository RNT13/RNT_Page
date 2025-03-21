import * as enums from '../utils/enums/tarefa'

class Tarefa {
  titulo: string
  descricao: string
  prioridade: enums.prioridade
  status: enums.status
  id: number
  categoria?: string

  constructor(titulo: string, descricao: string, prioridade: enums.prioridade, status: enums.status, id: number) {
    this.titulo = titulo
    this.descricao = descricao
    this.prioridade = prioridade
    this.status = status
    this.id = id
  }
}

export default Tarefa
