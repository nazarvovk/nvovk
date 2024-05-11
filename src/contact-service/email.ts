import { createTransport } from 'nodemailer'
import { z } from 'zod'
import { SendInput } from '.'
import dedent from 'dedent'

const EMAIL_CONFIG_SCHEMA = z.object({
  host: z.string(),
  port: z.number(),
  auth: z
    .object({
      user: z.string(),
      pass: z.string(),
    })
    .required(),
})

export class EmailContactService {
  constructor() {}

  public async send(options: SendInput): Promise<void> {
    const { host, port, auth } = this.config

    const transporter = createTransport({
      host,
      port,
      secure: port === 465,
      auth,
    })

    // send email to self
    await transporter.sendMail({
      from: auth.user,
      to: auth.user,
      subject: `Form submittion - ${options.name} <${options.email}>`,
      text:
        dedent`
        Name: ${options.name}
        Email: ${options.email}
        
        Message:
      ` + `\n${options.message}`,
      // message outside of dedent to prevent messing up email formatting when the message is multiline
    })
  }

  private get config() {
    const configJson = process.env.EMAIL_CONFIG

    if (!configJson) {
      throw new Error('Missing EMAIL_CONFIG environment variable')
    }

    const config = JSON.parse(configJson)

    return EMAIL_CONFIG_SCHEMA.parse(config)
  }
}
