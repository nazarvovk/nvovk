export type SendInput = {
  name: string
  email: string
  message: string
}

export type ContactService = {
  send: (input: SendInput) => Promise<void>
}
