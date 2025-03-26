import * as contactEnums from '../utils/enums/contactEnums'

class ContactModels {
  name: string
  email: string
  phone: number
  id: number
  status: contactEnums.status | undefined
  description?: string

  constructor(name: string, email: string, phone: number, id: number) {
    this.name = name
    this.email = email
    this.phone = phone
    this.id = id
  }
}

export default ContactModels
