import { Scope, asCachedClass } from 'holoscope'
import type { ContactService } from './contact-service'
import { LoggerContactService } from './contact-service/logger'

interface MainContainer {
  contactService: ContactService
}

export class MainScope extends Scope<MainContainer> {
  constructor() {
    super({
      contactService: asCachedClass(LoggerContactService),
    })
  }
}
