import { ContextWithValidatedRequestBody, formRequestMiddleware } from '@/form-request-middleware'
import { MainScope } from '@/scope'
import { NextApiHandler } from 'next'
import { shrext } from 'shrext'
import { z } from 'zod'

const ContactInput = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

type ContactContext = ContextWithValidatedRequestBody<typeof ContactInput>

const handler = shrext<NextApiHandler, ContactContext>()
  .use(formRequestMiddleware(ContactInput))
  .handler(async ({ args: [, res], validatedBody }) => {
    const scope = new MainScope()

    await scope.container.contactService.send(validatedBody)

    res.status(200).end()
  })

export default handler
