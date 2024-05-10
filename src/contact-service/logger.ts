import { ContactService, SendInput } from '.'

export class LoggerContactService implements ContactService {
  constructor() {}

  async send(input: SendInput): Promise<void> {
    // eslint-disable-next-line no-console
    console.log('Send message:', input)
  }
}
