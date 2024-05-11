import { Scope, asCachedClass } from 'holoscope'
import type { ContactService } from './contact-service'
import { EmailContactService } from './contact-service/email'

interface MainContainer {
  contactService: ContactService
}

export class MainScope extends Scope<MainContainer> {
  constructor() {
    super({
      contactService: asCachedClass(EmailContactService),
    })
  }
}
