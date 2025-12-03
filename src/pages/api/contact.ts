import {
  ContextWithValidatedRequestBody,
  formRequestMiddleware,
} from '@/form-request-middleware';
import { MainScope } from '@/scope';
import { NextApiHandler } from 'next';
import { shrext } from 'shrext';
import { z } from 'zod';

export const ContactInputSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z
    .string()
    .min(10)
    .max(
      10000,
      'Max 10,000 characters. Are you trying to send me the entire Bee Movie script?'
    ),
});
export type ContactInput = z.infer<typeof ContactInputSchema>;

type ContactContext = ContextWithValidatedRequestBody<
  typeof ContactInputSchema
>;

const handler = shrext<NextApiHandler, ContactContext>()
  .use(formRequestMiddleware(ContactInputSchema))
  .setHandler(async ({ args: [, res], validatedBody }) => {
    const scope = new MainScope();

    await scope.container.contactService.send(validatedBody);

    res.status(200).end();
  });

export default handler;
