import * as enums from '../utils/enums/taskEnums'

class TaskModels {
  title: string
  description: string
  priority: enums.priority
  status: enums.status
  id: number
  category?: string

  constructor(title: string, description: string, priority: enums.priority, status: enums.status, id: number) {
    this.title = title
    this.description = description
    this.priority = priority
    this.status = status
    this.id = id
  }
}

export default TaskModels
