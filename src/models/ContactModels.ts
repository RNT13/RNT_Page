type Status = 'active' | 'inactive' | 'pending'

class ContactModels {
  name: string
  email: string
  phone: number
  id: number
  status: Status | undefined
  description?: string

  constructor(name: string, email: string, phone: number, id: number) {
    this.name = name
    this.email = email
    this.phone = phone
    this.id = id
  }
}

export default ContactModels
